import React from 'react'
import Working from '../assets/projects/workImg.jpeg'
import RealEstate from '../assets/projects/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full text-gray-300 md:h-screen bg-primary-500'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='inline text-4xl font-bold border-b-4 border-teal-400'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>

          {/* Grid Items */}
          <div style={{ backgroundImage: `url(${Working})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div group'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>

          </div>

          <div style={{ backgroundImage: `url(${RealEstate})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div group'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>

          </div>

          <div style={{ backgroundImage: `url(${Working})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div group'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${RealEstate})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div group'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${Working})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div group'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${RealEstate})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div group'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider text-white'>
                React JS Application
              </span>

              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Work