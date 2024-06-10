import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import pic from './image.png'

const Home = () => {
  return (
    <div>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium'>Vihan Gayathra</h2>
        <h3 className='text-2xl py-2 text-white'>Software Engineer.</h3>
        <div className='flex justify-center'>
          <p className='text-md py-5 leading-5 text-gray-400 md:text-lg md:w-[800px] '>
          As a current student pursuing Bachelor of Software Engineering degree at OUSL, 
          I have sharpened my skills in software development and am excited to bring my enthusiasm for technology to real-world applications.
          </p>
        </div>
      </div>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <a href='https://www.linkedin.com/in/vihan-gayathra-50358a218/' target='blank'><AiFillLinkedin /></a>
        <a href='https://github.com/partisan2' target='blank'><AiFillGithub /></a>
      </div>
      <div className='flex mx-auto items-center justify-center mt-20'>
        <img src={pic} alt="" className='w-80 h-90 size-fit bg-gradient-to-b from-teal-500 rounded-full' />
      </div>
    </div>
  )
}

export default Home
