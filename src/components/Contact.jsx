import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='flex items-center justify-center w-full h-screen p-4 bg-primary-500'>

      <form method='POST' action='https://getform.io/f/61283e4a-7aa3-4765-a060-38149148d2dc' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold text-gray-300 border-b-4 border-teal-400'>
            Contact
          </p>
          <p className='py-4 text-gray-300'>
            Submit the form below or shoot me an email!
          </p>
        </div>

        <input type="text" placeholder='Name' name='name' className='p-2 my-2 bg-primary-100' />
        <input type="email" placeholder='Email' name='email' className='p-2 my-2 bg-primary-100' />
        <textarea name="message" rows="10" className='p-2 my-2 bg-primary-100' placeholder='Message'></textarea>

        <button className='flex items-center px-4 py-3 mx-auto my-8 text-white border-2 hover:bg-teal-400 hover:border-teal-400'>Let's Collaborate</button>
      </form>

    </div>
  )
}

export default Contact