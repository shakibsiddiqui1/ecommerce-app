import React from 'react'
import Img1 from "../../assets/women-ethnic.webp"
import Img2 from "../../assets/woman-western.jpg"
import Img3 from "../../assets/goggles.jpg"
import Img4 from "../../assets/swag_printed.jpg"
import Img5 from "../../assets/fashion-tshirts.jpg"
import {FaStar} from 'react-icons/fa6'

const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Women Ethnic",
        rating:5.0,
        aosDelay:"0"
    },
    {
        id:2,
        img:Img2,
        title:"Women Western",
        rating:4.5,
        aosDelay:"200"
    },
    {
        id:3,
        img:Img3,
        title:"Goggles",
        rating:4.7,
        aosDelay:"400"
    },
    {
        id:4,
        img:Img4,
        title:"Printed T-Shirt",
        rating:4.4,
        aosDelay:"600"
    },
    {
        id:5,
        img:Img5,
        title:"Fashion T-Shirt",
        rating:4.5,
        aosDelay:"800"
    }
]
const Products = () => {
  return (
    <div className="mt-14 mb-12">
        <div className="container">
            {/*Header Section*/}
            <div className="max-w-[600]px mx-auto text-center mb-10 space-y-1">
                <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Top Products</h1>
                <p data-aos="fade-up" className="text-xs text-gray-400">Explore selected Top Products must-haves in your wardrobe</p>
            </div>
            {/*Body Section*/}
            <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 placeItems-center gap-5">
                    {ProductsData.map((data)=>(
                        <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="space-y-3 mx-auto">
                            <img src={data.img} className="h-[220px] w-[150px] object-cover rounded-md"/>
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

export default Products