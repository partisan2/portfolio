import React from 'react'
import resume from './sampleData/resume.pdf'


const Navbar = () => {
  return (
    <div className='fixed left-0 top-0 h-screen w-1/6 flex justify-center items-center border-r border-slate-800 bg-[#0F172A] z-10'>
      <div className='py-10 px-4 mb-12 flex flex-col items-center' >
      <h1 className='text-xl font-burtons text-white mb-5'>PORTFOLIO</h1>
        <ul className='flex items-center'>
          <li>
            <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' href={resume} target='blank'>Resume</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
