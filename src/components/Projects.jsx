import React from 'react'
import {projectList} from './sampleData/moduleList'

const Projects = () => {
    // console.log(projectList?.map(Item => ({name : Item.projectName,tools :Item.projectTools})))
  return (
    <div id='projects' className='flex flex-col justify-center py-20'>
        <h3 className='text-3xl text-white px-10 py-10 text-center md:text-start'>PROJECTS.</h3>
      <div className='flex justify-between flex-wrap mx-10 py-10'>
            {projectList?.map((el,index)=>{
                return <div key={index} className='max-w-[450px] m-5 bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-xl shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:border-white/40'>
                        <h3 className='text-white text-xl py-2 font-semibold'>{el.projectName}</h3>
                        <p className='text-gray-300'>{el.projectDiscription}</p>
                        <ul className='text-gray-300 py-2 px-4 list-disc'>
                            <h4 className='text-white font-medium'>Tech Stack</h4>
                            {el.projectTools?.map((tool, tIndex) =>{
                                return <li key={tIndex} className='py-1'>{tool.tool}</li>
                            })}
                        </ul>
                    </div>
            })}
        </div>
    </div>
  )
}

export default Projects
