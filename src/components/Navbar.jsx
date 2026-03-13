import React, { useState, useEffect } from 'react'
import resume from './sampleData/resume.pdf'


const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='fixed left-0 top-0 h-screen w-1/6 flex justify-center items-center border-r border-slate-800 bg-[#0F172A] z-10'>
      <div className='py-10 px-8 mb-12 flex flex-col items-start w-full' >
        <h1 className='text-xl font-burtons text-white mb-10'>PORTFOLIO</h1>
        
        <ul className='flex flex-col items-start gap-6 mb-10 w-full'>
          {navLinks.map((link) => (
            <li key={link.id} className='w-full text-left'>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`text-lg transition-all duration-300 hover:text-white ${
                  activeSection === link.id ? 'text-white font-bold translate-x-2' : 'text-gray-400'
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <ul className='flex items-start'>
          <li>
            <a className='bg-[#38BDF8] text-white px-4 py-2 rounded-md' href={resume} target='blank'>Resume</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
