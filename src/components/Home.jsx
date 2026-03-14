import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import pic from './image.png'

const Home = () => {
  return (
    <div id='home' className='flex flex-col justify-center px-10 md:px-20'>
      <div className='text-left py-10'>
        <h2 className='text-5xl py-2 text-white font-medium'>Vihan Gayathra</h2>
        <h3 className='text-2xl py-2 text-white'>Aspiring Software Engineer.</h3>
        <div className='flex justify-start'>
          <p className='text-md py-5 leading-7 text-gray-400 md:text-lg md:w-[800px] text-left'>
            I'm a software engineering undergraduate with a strong interest in building intelligent, automated systems and intuitive web applications. 
            I enjoy working at the intersection of backend engineering and AI integration, 
            where complex data and logic come together to create scalable solutions that solve real-world business problems.
            <br />
            <br />
            Through my development experience, I have worked on a variety of projects ranging from backend systems and automation platforms to full-stack web applications.
            My work often focuses on integrating modern technologies such as APIs, AI-powered tools, and scalable backend architectures to create systems that are both efficient and user-friendly. Whether developing backend services, designing system workflows, or integrating intelligent automation into applications, 
            I aim to build software that is reliable, practical, and accessible.
          </p>
        </div>
      </div>
      <div className='text-5xl flex justify-start gap-16 py-3 text-gray-600'>
        <a className="hover:text-[#38BDF8]" href='https://www.linkedin.com/in/vihan-gayathra-50358a218/' target='blank'><AiFillLinkedin /></a>
        <a className="hover:text-white" href='https://github.com/partisan2' target='blank'><AiFillGithub /></a>
      </div>
      {/* <div className='flex mx-auto items-center justify-center mt-20'>
        <img src={pic} alt="" className='w-80 h-80 size-fit bg-gradient-to-b from-teal-500 rounded-full' />
      </div> */}
    </div>
  )
}

export default Home
