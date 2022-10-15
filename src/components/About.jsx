import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen text-gray-300 bg-primary-500'>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className='max-w-[1000px] px-4 w-full grid grid-cols-2 gap-8'>
          <div className='pb-8 sm:text-right'>
            <p className='inline text-4xl font-bold border-b-4 border-teal-400'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
          <div>
            <p className='text-4xl font-bold sm:text-right'>
              Hi. I'm Taufan Prasetyo, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-business all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About