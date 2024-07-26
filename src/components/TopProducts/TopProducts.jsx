import React from 'react'
import Img2 from '../../assets/checked-shirt.png'
import Img1 from '../../assets/woman-shirt.png'
import Img3 from '../../assets/child-tshirt.png'

import {FaStar} from 'react-icons/fa6'


const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Womens Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, quidem quas nulla aliquam amet obcaecati?",
        aosDelay:"0"
    },
    {
        id:2,
        img:Img2,
        title:"Mens Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, quidem quas nulla aliquam amet obcaecati?",
        aosDelay:"200"
    },
    {
        id:3,
        img:Img3,
        title:"Child Tshirts",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, quidem quas nulla aliquam amet obcaecati?",
        aosDelay:"400"
    }
]
export const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
        <div className="container">
            {/*Header Section*/}
            <div className="max-w-[600]px pl-[50px] text-left mb-24 space-y-1 ">
                <p data-aos="fade-up" className="text-sm text-primary">Top Rated Products for you</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
                <p data-aos="fade-up" className="text-xs text-gray-400">Elevate your wardrobe with our best products and get upto 30% on all selected products</p>
            </div>
            {/*Body Section*/}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-20 md:gap-5 place-items-center ">
                    {ProductsData.map((data)=>(
                        <div data-aos="zoom-in" key={data.id} className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-400 group max-w-[300px]">
                            {/*image section */}
                            <div className="h-[100px]">
                                <img className="max-w-[150px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md" src={data.img}/>
                            </div>   
                            {/*detail section */}
                            <div className="p-4 text-center">
                                <div className="flex justify-center items-center gap-1">
                                    <FaStar className="text-yellow-400"/>
                                    <FaStar className="text-yellow-400"/>
                                    <FaStar className="text-yellow-400"/>
                                    <FaStar className="text-yellow-400"/>
                                </div>  
                                <h1 className="text-xl font-bold">{data.title}</h1>
                                <p className="text-gray-500 group:hover:text-white duration-300 text-sm  line-clamp-2">{data.description}</p>
                                <button onClick={()=>{handleOrderPopup()}} className="bg-primary hover:scale-105 duration:300 text-white py-1 px-4 rounded-full  mt-4 group-hover:bg-white group-hover:text-black/80">Order Now</button>
                            </div> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
