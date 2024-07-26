import React from 'react'
import FooterLogo from '../../assets/shopping-bag.png'
import Banner from '../../assets/footer-img.jpg'
import building from '../../assets/pngegg.png'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const BannerImg = {
    backgroundImage : `url(${Banner})`,
    backgroundPosition : "bottom",
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover",
    height : "100%",
    width : "100%"
}
const FooterLinks = [
    {
        title:"Home",
        link:"/#"
    },
    {
        title:"About",
        link:"/#about"
    },
    {
        title:"Contact",
        link:"/#contact"
    },
    {
        title:"Blog",
        link:"/#blog"
    },
]
const FooterLinks2 = [
    {
        title:"Careers",
        link:"/#"
    },
    {
        title:"Achievements",
        link:"/#about"
    },
    {
        title:"Our Goals",
        link:"/#contact"
    },
    {
        title:"Press Releases",
        link:"/#blog"
    },
]
const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
        <div className="container">
            <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-15 pt-5">
                {/*company details */}
                <div className="py-8 px-4">
                    <h1 className="text -xl sm:text-3xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                        <img className="max-w-[50px]" src={FooterLogo} alt=""/>
                        Shopsy
                    </h1>
                    <p>Shopsy by Flipkart is a free selling platform that allows sellers to sell products online in India. The platform allows sellers to extend their reach to a wide network of budget-friendly customers across the country.</p>
                </div>
                {/*Nav Links details */}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks.map((data)=>(
                                        <li key={data.id} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                                            <span>{data.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks2.map((data)=>(
                                        <li key={data.id} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                                            <span>{data.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    
                    {/*social Links */}
                    <div>
                        <div className="flex items-center gap-3 mt-6 pl-[15px] sm:pl-[0px]">
                            <NavLink>
                                <FaInstagram className="text-3xl"/>
                            </NavLink>
                            <NavLink>
                                <FaFacebook className="text-3xl"/>
                            </NavLink>
                            <NavLink>
                                <FaLinkedin className="text-3xl"/>
                            </NavLink>
                        </div>
                        <div className="mt-6 pl-[15px] sm:pl-[0px]">
                            <div className="flex items-center gap-3">
                                <FaLocationArrow/>
                                <p>Noida, Uttar Pradesh</p>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                <FaMobileAlt/>
                                <p>+91 7037310011</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div>
            <img className="h-[100px] w-full bg-cover"src={building} alt=""/>
        </div>
    </div>
  )
}

export default Footer