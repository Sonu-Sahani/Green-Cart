import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
    return (
      <div className='relative mt-24 w-full'>
        {/* Desktop Image */}
        <img
          src={assets.bottom_banner_image}
          alt="banner"
          className='w-full hidden md:block'
        />
        {/* Mobile Image */}
        <img
          src={assets.bottom_banner_image_sm}
          alt="banner"
          className='w-full md:hidden'
        />
  
        {/* Content Overlay */}
        <div className='absolute inset-0 flex flex-col md:flex-row items-center bg:green 
        justify-center md:justify-end px-6 md:px-24 py-10 md:py-0'>
          <div className='bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-lg shadow-lg max-w-xl'>
            <h2 className='text-2xl md:text-3xl font-bold text-green-700 mb-6'>
              Why We Are the Best?
            </h2>
            <div className='space-y-5'>
              {features.map((feature, index) => (
                <div key={index} className='flex items-start gap-4'>
                  <img src={feature.icon} alt={feature.title} className='w-8 md:w-10 mt-1' />
                  <div>
                    <h3 className='text-lg md:text-xl font-semibold'>{feature.title}</h3>
                    <p className='text-gray-600 text-sm md:text-base'>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default BottomBanner