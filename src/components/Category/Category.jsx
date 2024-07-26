import React from 'react'
import Img1 from "../../assets/outdoor.jpg"
import Img2 from "../../assets/furniture.jpg"
import Img3 from "../../assets/kitchen.jpg"
import Img4 from "../../assets/fitness-img.jpg"
import Img5 from "../../assets/jewellery.jpg"
import {FaStar} from 'react-icons/fa6'

const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Home Decor",
        rating:5.0,
        aosDelay:"0"
    },
    {
        id:2,
        img:Img2,
        title:"Furniture",
        rating:4.5,
        aosDelay:"200"
    },
    {
        id:3,
        img:Img3,
        title:"Kitchen",
        rating:4.7,
        aosDelay:"400"
    },
    {
        id:4,
        img:Img4,
        title:"Fitness",
        rating:4.4,
        aosDelay:"600"
    },
    {
        id:5,
        img:Img5,
        title:"Jewellery",
        rating:4.5,
        aosDelay:"800"
    }
]
const Category = () => {
  return (
    <div className="mt-14 mb-12">
        <div className="container">
            {/*Header Section*/}
            <div className="max-w-[600]px mx-auto text-center mb-10 space-y-1">
                <p data-aos="fade-up" className="text-sm text-primary">Search by different categories of products</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Shop by Category</h1>
                <p data-aos="fade-up" className="text-xs text-gray-400">Explore different categories and get all your essentials at one place</p>
            </div>
            {/*Body Section*/}
            <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 placeItems-center gap-5">
                    {ProductsData.map((data)=>(
                        <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="space-y-3 mx-auto">
                            <img src={data.img} className="h-[220px] w-[190px] object-cover rounded-md hover:scale-105 duration-1000"/>
                            <div>
                                <h3 className="font-semibold">{data.title}</h3>
                                <p className="text-sm text-gray-600">{data.color}</p>
                            </div> 
                            <div className="flex items-center gap-1">
                                <FaStar className="text-yellow-400"/>
                                <span>{data.rating}</span>
                            </div>   
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button data-aos="fade-up" className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-4 rounded-md">View all products</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Category