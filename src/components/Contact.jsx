import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_54nilxj', 'template_ayj1sfn', form.current, {
            publicKey: 'Ocnu4mOyihZ8RunYU',
          })
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
    <div className='mt-20 flex justify-around flex-wrap'>
      <div className='mx-10'>
        <h2 className='text-teal-600 text-3xl py-4'>CONTACT.</h2>
        <div className='py-10 px-10'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Name' name="name" className='p-5 my-2 rounded-md block md:w-[300px]' required/>
                <input type="text" placeholder='Email' name='email' className='p-5 my-2 rounded-md block md:w-[300px]' required/>
                <input type="text" placeholder='Phone' name='email' className='p-5 my-2 rounded-md block md:w-[300px]'/>
                <textarea type="text" name='message' placeholder='Message' className='p-5 my-2 rounded-md block' cols={33} rows={10} required></textarea>
                <button className='text-white bg-gradient-to-r from-teal-600 to-cyan-500 px-5 py-3 rounded-lg mt-2'>SEND</button>
            </form>
        </div>
      </div>
      <div className='py-30 md:mt-10'>
        <h3 className='text-teal-300 text-2xl pt-10'>EMAIL</h3>
        <h4 className='text-gray-400'>vihan19gayathra@gmail.com</h4>
        <h3 className='text-teal-300 text-2xl pt-10'>LINKEDIN</h3>
        <h4 className='text-gray-400'><a href='https://www.linkedin.com/in/vihan-gayathra-50358a218/' target='blank'>Vihan Gayathra</a></h4>
        <h3 className='text-teal-300 text-2xl pt-10'>GITHUB</h3>
        <h4 className='text-gray-400'><a href='https://github.com/partisan2' target='blank'>Partisan2</a></h4>
      </div>
    </div>
  )
}

export default Contact
