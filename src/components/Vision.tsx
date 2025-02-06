import React from 'react'

const Vision = () => {
  return (
    <div className='container mx-auto md:my-24 my-10 px-3 '>
       <div className='md:grid grid-cols-2 max-w-7xl mx-auto'>
      <div className=''>
        <img src="/md3.jpg" alt=""className='w-[500px] h-[400px] object-cover rounded-xl' />
      </div>
        <div>
            <h1 className='md:text-5xl font-semibold text-2xl'>Vision & Mission</h1>
            <p className='text-gray-800 md:text-lg leading-8 pb-5 pt-8'>Our mission is to consistently become better at what we do by serving our clients, shareholders and society with ideas and products to promote financial growth for everyone and contributing to a sustainable future.</p>
            <p className='text-gray-800 md:text-lg leading-8 '>Our vision is to empower our clients financially by delivering innovation and prosperity through our offerings. We aim to keep moving forward with a blend of conventional wisdom and new ideas.</p>
        </div> 
      
       </div>
    </div>
  )
}

export default Vision
