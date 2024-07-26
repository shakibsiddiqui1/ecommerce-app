import React from 'react'
import Logo from '../../assets/shopping-bag.png'
import { DarkMode } from './DarkMode';
import { IoMdSearch} from "react-icons/io";
import { FaCaretDown, FaCartShopping} from "react-icons/fa6";
import {NavLink}  from "react-router-dom";

const Menu =[
    {
        id:1,
        name:"Home",
        link:"/"
    },
    {
        id:2,
        name:"Top Rated",
        link:"/services"
    },
    {
        id:3,
        name:"Kids Wear",
        link:"/kids-wear"
    },
    {
        id:4,
        name:"Mens Wear",
        link:"/mens-wear"
    }

]
const DropdownLink=[
    {
        id:1,
        name:"Trending Products",
        link:"/#"
    },
    {
        id:2,
        name:"Best Selling",
        link:"/#"
    },
    {
        id:3,
        name:"Top Rated",
        link:"/#"
    }
]
const Navbar = ({handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
         {/*Upper Navbar*/}
        <div className="bg-primary/40 py-2">
            <div className="container flex justify-between items-center">
                <div>
                    <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={Logo} alt='logo' className='w-10'/>
                        Shopsy
                    </a>
                </div>
                {/*search bar and order button */}
                <div className="flex gap-5 items-center">
                    <div className='relative group hidden sm:block'>
                        <input type='text'
                        placeholder='search'
                        className='w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800'/>
                        <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2" />
                    </div>
                    <button onClick={()=>{handleOrderPopup()}} className="group bg-gradient-to-r from-primary to-secondary transition-all duration-200 rounded-full py-[3px] px-4 flex items-center gap-3">
                        <span className="hidden group-hover:block duration-500 transition-all">Order</span>
                        <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                    </button>
                    <div>
                        <DarkMode/>
                    </div>
                </div>
            </div>
        </div>
         {/*Lower Navbar */}
        <div data-aos="zoom-in" className="flex justify-center">
            <ul className="sm:flex hidden items-center gap-4">
                {
                    Menu.map((data)=>(
                        <li key={data.id}>
                            <NavLink to={data.link}
                            className={({isActive}) =>
                            `inline-block px-8 hover:text-primary duration-200 ${isActive ? "text-primary" : ("text-gray-500")}`
                        }
                                >
                                {data.name}
                            </NavLink>
                        </li>
                    ))
                }  
                <li className="group relative">
                    <NavLink className="flex items-center gap-[2px] py-2 text-gray-500 dark:hover:text-primary">
                        Trending
                        <span>
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                        </span>
                    </NavLink>
                    <div className="absolute hidden z-[9999] w-[200px] shadow-md rounded-md bg-white p-2 text-black group-hover:block">
                        <ul>
                            {DropdownLink.map((data)=>(
                                <li key={data.id}>
                                    <NavLink to={data.link} className="inline-block rounded-md p-2 w-full hover:bg-primary/20 hover:translate-x-1 duration-200">
                                        {data.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>            
            </ul>                
        </div>
    </div>
  )
}

export default Navbar