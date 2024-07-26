import React from 'react'
import Banner from '../../assets/bg-orange.jpg'

const BannerImg = {
    backgroundImage : `url(${Banner})`,
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover",
    height : "100%",
    width : "100%"
}
const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className="mb-20 bg-gray-100 dark:bg-gray-800 text-white" style={BannerImg}>
        <div className="container backdrop-blur-sm py-10">
            <div className="space-y-6 max-w-xl mx-auto pl-[50px] pr-[50px] sm:pl-[0px] sm:pr-[0px]">
                <h1 data-aos="fade-up" className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">Get Notified About New Products</h1>
                <input data-aos="fade-up" type="text" placeholder="Enter you email" className="w-full p-3 rounded-md"/>
            </div>

        </div>
    </div>
  )
}

export default Subscribe