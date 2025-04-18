import React from 'react'
import MainBanner from '../components/MainBanner'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'

const home = () => {
  return (
    <div>
        <Navbar/>
        <MainBanner/>
        <Categories/>
        <BestSeller/>
        <BottomBanner/>
        <NewsLetter/>
    </div>
  )
}

export default home