import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className='w-full px-2 py-2.5 border border-gray-500/30 rounded 
      outline-none text-gray-500 focus:border-primary transition'
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
  />
)

const AddAddress = () => {
  const { navigate } = useAppContext();

  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    country: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const existingAddresses = JSON.parse(localStorage.getItem("greencart-addresses")) || [];
    const updatedAddresses = [...existingAddresses, address];
    localStorage.setItem("greencart-addresses", JSON.stringify(updatedAddresses));

    navigate("/cart");
  };

  return (
    <div className='mt-16 pb-16'>
      <p className='text-2xl md:text-3xl text-gray-500'>
        Add Shipping <span className='font-semibold text-primary'>Address</span>
      </p>

      <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
        <div className='flex-1 max-w-md'>
          <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
            <div className='grid grid-cols-2 gap-3'>
              <InputField handleChange={handleChange} address={address}
                name='firstName' type="text" placeholder="First Name" />
              <InputField handleChange={handleChange} address={address}
                name='lastName' type="text" placeholder="Last Name" />
            </div>

            <InputField handleChange={handleChange} address={address}
              name='email' type="email" placeholder="Email Address" />

            <InputField handleChange={handleChange} address={address}
              name='street' type="text" placeholder="Street Address" />

            <div className='grid grid-cols-2 gap-3'>
              <InputField handleChange={handleChange} address={address}
                name='city' type="text" placeholder="City" />
              <InputField handleChange={handleChange} address={address}
                name='state' type="text" placeholder="State" />
            </div>

            <div className='grid grid-cols-2 gap-3'>
              <InputField handleChange={handleChange} address={address}
                name='country' type="text" placeholder="Country" />
              <InputField handleChange={handleChange} address={address}
                name='phone' type="text" placeholder="Phone Number" />
            </div>

            <button
              type='submit'
              className='w-full py-2.5 bg-primary text-white font-medium mt-2 rounded hover:bg-primary/90 transition'
            >
              Save Address
            </button>
          </form>
        </div>

        <img
          className='md:mr-16 mb-16 md:mt-0 max-w-[400px]'
          src={assets.add_address_iamge}
          alt="Add Address"
        />
      </div>
    </div>
  );
};

export default AddAddress;
