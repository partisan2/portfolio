import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <div className="bg-[#0F172A] text-white flex min-h-screen">
      <div className='w-1/6'>
        <Navbar />
      </div>
      <div className='flex-1'>
        <Home />
        <Projects />
        <Education />
        <Contact />
      <h5 className='text-white text-center py-6'>© 2024 Vihan Gayathra</h5>
      </div>
    </div>
  );
}

export default App;
