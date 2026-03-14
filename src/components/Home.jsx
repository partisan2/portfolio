import React, { useEffect, useState } from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import pic from './image.png'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
  const [init, setInit] = useState(false);

  const [text] = useTypewriter({
    words: ['React JS','Node JS','Express JS', 'Java', 'Spring Boot','Python', 'Automation Tools'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  })

  

  return (
    <div id='home' className='relative flex flex-col justify-center px-10 md:px-20 overflow-hidden'>
      {/* {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={options}
        />
      )} */}
      <div className='flex flex-col lg:flex-row items-center justify-between gap-10 min-h-screen py-10'>
        {/* Left Side: Existing Content */}
        <div className='relative z-10 text-left flex-1'>
          <h2 className='text-5xl py-2 text-white font-medium'>Vihan Gayathra</h2>
          <h3 className='text-2xl py-2 text-white'>Aspiring Software Engineer.</h3>
          <div className='flex justify-start'>
            <p className='text-md py-5 leading-7 text-gray-400 md:text-lg md:w-full max-w-[800px] text-left'>
              I'm a software engineering undergraduate with a strong interest in building intelligent, automated systems and intuitive web applications. 
              I enjoy working at the intersection of backend engineering and AI integration, 
              where complex data and logic come together to create scalable solutions that solve real-world business problems.
              <br />
              <br />
              Through my development experience, I have worked on a variety of projects ranging from backend systems and automation platforms to full-stack web applications.
            </p>
          </div>
          <div className='relative z-10 text-5xl flex justify-start gap-16 py-3 text-gray-600'>
            <a className="hover:text-[#38BDF8]" href='https://www.linkedin.com/in/vihan-gayathra-50358a218/' target='blank'><AiFillLinkedin /></a>
            <a className="hover:text-white" href='https://github.com/partisan2' target='blank'><AiFillGithub /></a>
          </div>
        </div>

      
        <div className='relative z-10 w-full lg:w-[400px] flex-shrink-0'>
          <div className='bg-[#1E293B]/60 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl overflow-hidden font-mono'>
            <div className='bg-[#1E293B] px-4 py-2 flex items-center gap-2 border-b border-white/10'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
              <span className='text-gray-400 text-xs ml-2'>terminal — vihan.exe</span>
            </div>
            <div className='p-6 min-h-[160px] text-teal-400'>
              <div className='mb-2'>
                <span className='text-white'>$</span> <span className='text-yellow-400'>cat</span> build_stack.txt
              </div>
              <div className='text-white'>
                I build with:
              </div>
              <div className='mt-2 text-xl font-bold'>
                {text}
                <Cursor cursorStyle='_' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

