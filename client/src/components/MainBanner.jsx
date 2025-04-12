import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom' // Required for <Link>

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt="banner" className='w-full hidden md:block' />
      <img src={assets.main_banner_bg_sm} alt="banner" className='w-full md:hidden' />
      
      <div>
        <h1>Freshness You Can Trust, Saving You Will Love!</h1>
      </div>

      <div>
        <Link to="/product" className='group flex items-center gap-2 px-7 md:px-9 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
          Shop Now
          <img src={assets.white_arrow_icon} alt="" />
        </Link>

        <Link to="/product" className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
          Explore Deals
          <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default MainBanner
