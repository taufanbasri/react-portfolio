import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-primary-500'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-teal-400'>Hi, my name is</p>
        <h1 className='text-4xl font-bold sm:text-7xl text-primary-100'>Taufan Prasetyo</h1>
        <h2 className='text-4xl font-bold sm:text-7xl text-primary-200'>I'm a Full Stack Developer.</h2>
        <p className='text-primary-200 py-4 max-w-[700px]'>
          I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.
        </p>

        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className='flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-teal-400 hover:border-teal-400 hover:text-primary-500'>
              View Work
              <span className='duration-300 group-hover:rotate-90'>
                <HiArrowNarrowRight className='ml-2' />
              </span>
            </button>
          </Link>
        </div>
      </div>

    </div >
  )
}

export default Home