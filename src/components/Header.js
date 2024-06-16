import React from 'react';
import logo from "./../assets/images/logo.png";
import { HiHome, HiStar, HiPlayCircle, HiTv, HiMagnifyingGlass } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import { USER_URL } from '../utils/constants';

const Header = () => {
    const menu = [
        { name: "Home", icon: HiHome },
        { name: "Search", icon: HiMagnifyingGlass },
        { name: "Watch List", icon: HiPlus },
        { name: "Originals", icon: HiStar },
        { name: "Movies", icon: HiPlayCircle },
        { name: "TV", icon: HiTv }
    ];

    return (
        <div className='flex items-center justify-between p-5 w-auto'>
            {/* Left Section - Logo and Menu Items */}
            <div className='flex items-center gap-8'>
                <img src={logo} className='w-16 md:w-20 object-cover' alt="Logo" />
                
                {/* Display full menu items for medium screens and larger */}
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                    ))}
                </div>

                {/* Display partial menu items for smaller screens */}
                <div className='md:hidden flex gap-8'>
                    {menu.slice(0, 3).map((item) => (
                        <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                    ))}
                    <HeaderItem name={""} Icon={HiDotsVertical} />
                    
                </div>
            </div>

            {/* Right Section - User Profile Image */}
            <div>
                <img className='w-12 h-12 md:w-20 md:h-20 rounded-full' src={USER_URL} alt="User" />
            </div>
        </div>
    );
}

export default Header;
