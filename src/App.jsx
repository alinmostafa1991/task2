import './App.css'
import Navbar1 from './components/Navbar1/Navbar1.jsx'
import Navbar2 from './components/Navbar2/Navbar2.jsx'
import Slides from './components/Slides/Slides.jsx'
import Section1 from './components/Section 1/Section1.jsx'
import Section2 from './components/Section 2/Section2.jsx'
import Section3 from './components/Section 3/Section3.jsx'
import Section4 from './components/Section 4/Section4.jsx'
import Section5 from './components/Section 5/Section5.jsx'
import Section6 from './components/Section 6/Section6.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className='Container'>
      <Navbar1/>
      <Navbar2/>
      <Slides/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>      
      <Section5/>
      <Section6/>
      <Footer/>
      
    </div>
  )
}

export default App
