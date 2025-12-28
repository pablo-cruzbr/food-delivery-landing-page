import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Testimonial from  './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
