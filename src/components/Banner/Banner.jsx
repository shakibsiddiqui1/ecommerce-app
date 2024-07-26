import React from 'react'
import BannerImg from '../../assets/woman-banner.jpg'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";


const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-20">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/*image section*/}
                <div data-aos="zoom-in">
                    <img src={BannerImg} alt="" className="max-w-[400px] h-[350px]  mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"/>
                </div>
                {/*content section */}
    
                <div className="flex flex-col justify-center gap-5 pt:0  md:ml-[70px] pl-[50px] sm:pl-[0px]">
                    <h1 className="text-3xl sm:text-4xl font-bold">Winter Sale upto 50% Off</h1>
                    <p className="text-sm text-gray-500 tracking-wide leading-5">Pick the trending products in winter fashion sale and get upto 50% off on all brands</p>
                    <div className="flex flex-col gap-4">

                        <div data-aos="fade-up" className="flex items-center gap-4">
                        <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                        <p>Quality Products</p>
                        </div>

                        <div data-aos="fade-up" className="flex items-center gap-4">
                        <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                        <p>Fast Delivery</p>
                        </div>

                        <div data-aos="fade-up" className="flex items-center gap-4">
                        <MdOutlinePayment className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                        <p>Easy Payment Method</p>
                        </div>

                        <div data-aos="fade-up" className="flex items-center gap-4">
                        <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                        <p>Get Offers</p>
                        </div>
                    </div>
                </div>
 


            </div>
        </div>
    </div>
  )
}

export default Banner