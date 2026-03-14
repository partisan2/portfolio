import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            {
              publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
            }
          )
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Message Sent..!')
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert('Failed..!')
            },
          );
      };
  return (
    <div id='contact' className='flex flex-col justify-center py-20'>
      <h3 className='text-3xl text-white px-10 py-10 text-center md:text-start'>CONTACT.</h3>
      <div className='flex justify-start flex-wrap gap-10 md:gap-20 px-10'>
        <div className=''>
          <div className='py-4'>
              <form ref={form} onSubmit={sendEmail}>
                  <input type="text" placeholder='Name' name="name" className='p-5 my-2 rounded-md block md:w-[400px] bg-[#1E293B] text-white border border-slate-700' required/>
                  <input type="text" placeholder='Email' name='email' className='p-5 my-2 rounded-md block md:w-[400px] bg-[#1E293B] text-white border border-slate-700' required/>
                  <input type="text" placeholder='Phone' name='phone' className='p-5 my-2 rounded-md block md:w-[400px] bg-[#1E293B] text-white border border-slate-700'/>
                  <textarea name='message' placeholder='Message' className='p-5 my-2 rounded-md block md:w-[400px] bg-[#1E293B] text-white border border-slate-700' cols={33} rows={8} required></textarea>
                  <button className='text-white bg-gradient-to-r from-teal-600 to-cyan-500 px-8 py-3 rounded-lg mt-4 font-bold hover:scale-105 transition-transform'>SEND MESSAGE</button>
              </form>
          </div>
        </div>
        <div className='flex flex-col justify-start'>
          <div className='mb-10'>
            <h3 className='text-[#38BDF8] text-xl font-semibold'>EMAIL</h3>
            <h4 className='text-gray-400 mt-1 hover:text-white transition-colors'><a href="mailto:vihan19gayathra@gmail.com">vihan19gayathra@gmail.com</a></h4>
          </div>
          <div className='mb-10'>
            <h3 className='text-[#38BDF8] text-xl font-semibold'>LINKEDIN</h3>
            <h4 className='text-gray-400 mt-1 hover:text-white transition-colors'><a href='https://www.linkedin.com/in/vihan-gayathra-50358a218/' target='blank'>Vihan Gayathra</a></h4>
          </div>
          <div className='mb-10'>
            <h3 className='text-[#38BDF8] text-xl font-semibold'>GITHUB</h3>
            <h4 className='text-gray-400 mt-1 hover:text-white transition-colors'><a href='https://github.com/partisan2' target='blank'>Partisan2</a></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
