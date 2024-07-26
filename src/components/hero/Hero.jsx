import React from 'react'
import Image1 from '../../assets/hero-images/man.png'
import Image2 from '../../assets/hero-images/woman.com.png'
import Image3 from '../../assets/hero-images/sale.png'
import Slider from 'react-slick'

const ImageList=[
    {
        id:1,
        img:Image1,
        title:"Upto 50% off on all Men's Wear",
        description:"Shop the trendy men's product of all brand and get discount upto 50% off on using credit card"
    },
    {
        id:2,
        img:Image2,
        title:"Upto 30% off on all Women's Wear",
        description:"Get up to 30% off on selected brands on woman's wear and get chance to win iphone 14 during sale"
    },
    {
        id:3,
        img:Image3,
        title:"Upto 70% off on all Product's Sale",
        description:"Use selected bank debit and credit card and get discount of 70% off on all products."
    }
]
const Hero = ({handleOrderPopup}) => {
    
    var settings={
        dots:false,
        arrows:false,
        infinite:true,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseonHover:false,
        pauseonFocus:true   
    }

  return (
    <div className="relative overflow-hidden bg-gray-100 min-h-[550px] sm:min-h-[650px] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        <div className="w-[700px] h-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">
        </div>

        {/*Hero Section*/}
        <div className="container pb-8 sm:pb-0">
            <Slider {...settings}>
                {ImageList.map((data)=>(
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2">

{/*Div Section*/}
<div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
    <h1 data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl text-bold">{data.title}</h1>
    <p  data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="text-sm">{data.description}</p>
    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
        <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full" onClick={()=>handleOrderPopup()}>Order Now</button>
    </div>
</div>

{/*Image Section*/}
<div className="order-1 sm:order-2">
    <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
        <img src={data.img} alt="" className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-100 lg:scale-115 object-contain mx-auto"/>
    </div>
</div>
</div>

                    </div>
                ))}
            </Slider>
        </div>

    </div>
  )
}

export default Hero