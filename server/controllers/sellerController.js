import jwt from 'jsonwebtoken';

//login seller: /api/seller/login
export const sellerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

    if( password === process.env.SELLER_PASSWORD && email === process.env.SELLER_EMAIL ){
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.cookie('sellerToken', token , { 
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.status(200).json({ sucess: true, message: 'Login successful', token });
    }else{
        return res.status(401).json({ sucess: false, message: 'Invalid credentials' });
    }
    } catch (error) {
        console.log(error.message);
        res.json({ sucess: false, message: error.message });
    }
}

//check SelerAuth: /api/seller/is-auth
export const isSellerAuth = async (req, res)=>{
    try {
        return res.json({success:true});
    } catch (error) {
        console.log(error.message);
        res.json({success:false, message: error.message });
    }
}

//Logout seller: /api/seller/logout
export const sellerLogout = async (req, res) => {
    try {
        res.clearCookie('sellerToken',{ 
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        return res.json({success:true, message: "Logged out successfully"});

    } catch (error) {
        console.log(error.message);
        res.json({success:false, message: error.message });
    }
}

