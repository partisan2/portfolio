import React from 'react'
import {moduleList} from './sampleData/moduleList'

const Education = () => {
  return (
    <div className='mt-10 '>
        <h3 className='text-3xl text-white px-10 py-10 text-center md:text-start'>EDUCATION.</h3>
      <div className='flex justify-center gap-8 flex-wrap'>
        <div className='mx-10 md:px-10'>
            <h3 className='text-2xl text-teal-500'>Advanced Level</h3>
            <h4 className='text-gray-400'>Biological Science</h4>
            <h4 className='text-gray-500'>Richmond College</h4>
        </div>
        <div className='m-10 md:m-0'>
            <h3 className='text-2xl text-teal-500 '>BACHELOR OF SOFTWARE ENGINEERING<sub className='text-gray-400 text-sm'> (ug) </sub></h3>
            <h4 className='text-gray-500'>OUSL</h4>
            <div className='h-[300px] overflow-y-auto mt-1'>
                <ul className=''>
                    {moduleList?.map((el)=>{
                        return <li className='text-gray-400 px-3'>{el.moduleName}</li>
                        })}
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Education
