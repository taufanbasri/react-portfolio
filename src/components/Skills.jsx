import React from 'react'
import HTML from '../assets/skills/html.png'
import CSS from '../assets/skills/css.png'
import JavaScript from '../assets/skills/javascript.png'
import Tailwind from '../assets/skills/tailwind.png'
import PHP from '../assets/skills/php.png'
import Laravel from '../assets/skills/laravel.svg'
import ReactJS from '../assets/skills/react.png'
import VueJS from '../assets/skills/vue.png'
import Github from '../assets/skills/github.png'
import NodeJS from '../assets/skills/node.png'
import NuxtJS from '../assets/skills/nuxtjs.svg'
import MySQL from '../assets/skills/mysql.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full text-gray-300 md:h-screen bg-primary-500'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='inline text-4xl font-bold border-b-4 border-teal-400'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-3 md:grid-cols-4'>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between py-2'>
            <img src={ReactJS} alt="reactjs icon" className='w-20 mx-auto' />
            <p>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between py-2'>
            <img src={VueJS} alt="vuejs icon" className='w-20 mx-auto' />
            <p>Vue</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between py-2'>
            <img src={Laravel} alt="laravel icon" className='w-20 mx-auto' />
            <p>Laravel</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between py-2'>
            <img src={NuxtJS} alt="nuxtjs icon" className='w-20 mx-auto' />
            <p>Nuxt</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between py-2'>
            <img src={Tailwind} alt="tailwindcss icon" className='w-20 mx-auto' />
            <p>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between py-2'>
            <img src={NodeJS} alt="nodejs icon" className='w-20 mx-auto' />
            <p>Node</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between py-2'>
            <img src={JavaScript} alt="js icon" className='w-20 mx-auto' />
            <p>Javascript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between py-2'>
            <img src={PHP} alt="php icon" className='w-20 mx-auto' />
            <p>PHP</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between py-2'>
            <img src={MySQL} alt="php icon" className='w-20 mx-auto' />
            <p>MySQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between py-2'>
            <img src={CSS} alt="css icon" className='w-20 mx-auto' />
            <p>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between py-2'>
            <img src={HTML} alt="HTML icon" className='w-20 mx-auto' />
            <p>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between py-2'>
            <img src={Github} alt="github icon" className='w-20 mx-auto' />
            <p>Github</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills