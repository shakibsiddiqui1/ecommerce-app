import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'
import Banner from './components/Banner/Banner'
import AOS from 'aos'
import "aos/dist/aos.css"
import { TopProducts } from './components/TopProducts/TopProducts'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import Category from './components/Category/Category'

const App = () => {
  const [orderPopup,setOrderPopup] = useState(false)

  const handleOrderPopup = ()=>{
    setOrderPopup(!orderPopup)
  }

  useEffect(()=>{
    AOS.init({
        offset:100,
        duration:800,
        easing:"ease-in-sine",
        delay:100
      })
      AOS.refresh()
  },[])
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscribe/>
      <Category/>
      <Testimonial/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default App