import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../assets/logo1.png'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed flex items-center justify-between w-full h-20 px-4 text-gray-300 bg-primary-500'>
      <div>
        <img src={Logo} alt="logo" className='w-[50px]' />
      </div>

      {/* Menu */}

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skilss</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>


      {/* Hamburger */}
      <div onClick={handleClick} className='z-10 md:hidden'>
        {
          nav ? <FaTimes /> : <FaBars />
        }
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 flex flex-col justify-center w-full h-screen bg-primary-500 items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skilss</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  )
}

export default Navbar