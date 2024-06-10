import React from 'react'
import resume from './sampleData/resume.pdf'


const Navbar = () => {
  return (
    <div>
      <div className='py-10 px-4 mb-12 flex justify-between' >
        <h1 className='text-xl font-burtons text-teal-200'>PORTFOLIO</h1>
        <ul className='flex items-center'>
          <li>
            <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mr-3' href={resume} target='blank'>Resume</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
