import { useEffect } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from "./components/Headers";
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import About from "./components/About"
import Profile from "./components/Profile"
import Service from "./components/Service"
import Packages from "./components/Packages"
import Contect from "./components/Contect"
import Oders from "./components/Oders"


const Home = () => {
  <>

    <section id='Hero'></section>
    <section id='About'></section>
    <section id='Profile'></section>
    <section id='Service'></section>
    <section id='Contect'></section>
    <section id='packages'></section>

  </>
}

function App() {
  function Scroll() {
    const { pathname } = useLocation();

    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return
    }


    useEffect(() => {
      const id = pathname.replace("/", "");
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }

    }, [pathname])

    return null;
  }

  return (
    <>
    <div
    className='overflow-x-hidden'
    >

   
    <div
  
   >
      <Scroll />
      <Header />
      <Routes>
        <Route id="Hero"  path='/Hero'element={<Home />} />
        <Route id='About'path='/About' element={<Home />} />
        <Route id='Profile' path='/Profile'element={<Home />} />
        <Route id='Packages'path='/Packages' element={<Home />} />
        <Route id='Service'path='/Service' element={<Home />} />
        <Route id='Contect'path='/Contect' element={<Home />} />
        <Route id='Oders'path='/Oders' element={<Home />} />
      </Routes>
      <Hero />
      <About />
      <Profile />
      <Service />
      <Packages />
      <Contect />
      <Oders />
      <Footer />
       </div>
        </div>
    </>
  )
}

export default App
