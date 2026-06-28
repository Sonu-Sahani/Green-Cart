import Order from "../models/Order.js";
import Product from "../models/Product.js";
import Stripe from "stripe";
import User from "../models/User.js"

//place order cod: /api/order/cod
export const placeOrderCOD = async (req, res) => {
    try {
        const { userId, items,address } = req.body;
        if(!address || items.length === 0){
            return res.json({success: false, message:"Please add address and items"})
        }
        //calculate total amount
        let amount = await items.reduce(async(acc, item)=>{
            const product = await Product.findById(item.product)
            return (await acc) + (product.offerPrice * item.quantity)
        },0)

        //add tax charge 2%
        amount += Math.floor(amount * 0.02);

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: 'COD',
        })
        res.json({ success: true, message: "Order placed successfully" });
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}

//place order Stripe: /api/order/stripe
export const placeOrderStripe = async (req, res) => {
    try {
        const { items, address } = req.body;
        const userId = req.userId;
        const { origin } = req.headers;

        if (!address || items.length === 0) {
            return res.json({
                success: false,
                message: "Please add address and items",
            });
        }

        let productData = [];

        let amount = await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product);

            if (!product) throw new Error("Product not found");

            productData.push({
                name: product.name,
                price: product.offerPrice,
                quantity: item.quantity,
            });

            return (await acc) + product.offerPrice * item.quantity;
        }, Promise.resolve(0));

        amount += Math.floor(amount * 0.02);

        const order = await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "Online",
            isPaid: false,
        });

        const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

        const line_items = productData.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                },
                unit_amount: Math.floor(item.price * 1.02 * 100),
            },
            quantity: item.quantity,
        }));

        const session = await stripeInstance.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",

            success_url: `${origin}/loader?next=my-orders`,
            cancel_url: `${origin}/cart`,

            metadata: {
                orderId: order._id.toString(),
                userId: userId.toString(),
            },
        });

        return res.json({
            success: true,
            url: session.url,
        });
    } catch (err) {
        console.log(err);
        return res.json({
            success: false,
            message: err.message,
        });
    }
};

//stripe webhoooks to verify payment action : /stripe
export const stripeWebhooks = async (req, res) => {
    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

    const signature = req.headers["stripe-signature"];

    let event;

    try {
        event = stripeInstance.webhooks.constructEvent(
            req.body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.log("Signature Error:", err.message);
        return res.status(400).send(err.message);
    }

    console.log("Webhook Event:", event.type);

    try {
        switch (event.type) {

            case "checkout.session.completed": {

                const session = event.data.object;

                console.log("Session Metadata:", session.metadata);

                const { orderId, userId } = session.metadata;

                const updatedOrder = await Order.findByIdAndUpdate(
                    orderId,
                    {
                        isPaid: true,
                    },
                    {
                        new: true,
                    }
                );

                console.log(updatedOrder);

                await User.findByIdAndUpdate(userId, {
                    cartItems: {},
                });

                break;
            }

            default:
                console.log("Unhandled Event:", event.type);
        }

        return res.json({
            received: true,
        });

    } catch (err) {
        console.log("Webhook Error:", err);
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

//Get Orders by user Id: /api/order/user
export const getUserOrders = async (req, res)=>{
    try {
        const userId = req.userId;
        const orders = await Order.find({
            userId,
            $or: [{paymentType: 'COD'}, {isPaid: true}]
        }).populate('items.product address').sort({createdAt: -1})
        res.json({success: true, orders})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}

//Get all orders(for seller/ admin): /api/order/seller
export const getAllOrders = async (req, res)=>{
    try {
        const orders = await Order.find({
            $or: [{paymentType: 'COD'}, {isPaid: true}]
        }).populate('items.product address').sort({createdAt: -1})
        res.json({success: true, orders})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}
        
        
        
