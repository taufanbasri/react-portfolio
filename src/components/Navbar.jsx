import React, { useState } from 'react'
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
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
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className='w-40 h-[60px] ml-[-100px] hover:ml-[-10px] bg-[#0966C2] duration-300 flex justify-center items-center'>
            <a href="#" className='flex items-center justify-between w-full text-gray-300'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-40 h-[60px] ml-[-100px] hover:ml-[-10px] bg-[#161B22] duration-300 flex justify-center items-center'>
            <a href="#" className='flex items-center justify-between w-full text-gray-300'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-40 h-[60px] ml-[-100px] hover:ml-[-10px] bg-teal-600 duration-300 flex justify-center items-center'>
            <a href="#" className='flex items-center justify-between w-full text-gray-300'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-40 h-[60px] ml-[-100px] hover:ml-[-10px] bg-gray-600 duration-300 flex justify-center items-center'>
            <a href="#" className='flex items-center justify-between w-full text-gray-300'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar