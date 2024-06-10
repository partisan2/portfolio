import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Home />
      <Projects />
      <Education />
      <Contact />
      <h5 className='text-white text-center py-6'>© 2024 Vihan Gayathra</h5>
    </div>
  );
}

export default App;
