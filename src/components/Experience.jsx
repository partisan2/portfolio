import React from 'react'
import { experienceList } from './sampleData/moduleList'

const Experience = () => {
  return (
    <div id='experience' className='flex flex-col justify-center py-20'>
       <h3 className='text-3xl text-white px-10 py-10 text-center md:text-start'>EXPERIENCE.</h3>
       <div className='flex flex-wrap gap-12 mx-10 justify-start'>
          {experienceList?.map((el, index) => (
            <div key={index} className='border-l-2 border-slate-700 pl-8 transition-all duration-500 hover:border-[#38BDF8] max-w-[500px] py-2'>
              <div className='flex flex-col mb-4'>
                <h3 className='text-xl text-white font-semibold transition-colors duration-300'>{el.jobTitle}</h3>
                <h4 className='text-[#38BDF8] text-lg'>{el.company}</h4>
                <p className='text-gray-500 text-sm italic mt-1'>{el.startDate} – {el.endDate}</p>
              </div>
              <ul className='text-gray-400 space-y-3 list-none'>
                {el.description?.map((item, idx) => (
                  <li key={idx} className='flex items-start gap-3 text-[15px] leading-relaxed'>
                    <span className='text-[#38BDF8] mt-1'>▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
       </div>
    </div>
  )
}

export default Experience