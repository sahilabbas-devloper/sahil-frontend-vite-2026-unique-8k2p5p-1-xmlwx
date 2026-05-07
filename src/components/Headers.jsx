import { useState } from "react";
import { Link } from "react-router-dom";

function Headers() {
  const [open, setopen] = useState(false)

  

  return (
     <div>
    <header >
      <div className='bg-white text-black fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 shadow-lg z-50'>
        <Link to='/Hero' className='  text-amber-300 text-[18px]  md:text-2xl font-bold'>Photography</Link>
        <nav className='hidden md:flex items-center gap-6 text-sm font-semibold'>

          <Link className='hover:text-amber-300 text-gray-600' to='/Hero'>Home</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/About'>About</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Profile'>Profile</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Service'>Services</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Packages'>packages</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Contect'>Contect</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Oders'>Oders</Link>
        </nav>
        <div className='md:hidden'>
          {open? (<button
          onClick={() => setopen(!open)}
          className='md:hidden font-bold text-4xl'>
            x
          </button>):(<button
          onClick={() => setopen(!open)}
          className='md:hidden font-bold text-3xl'>
            ☰
          </button>)}
        </div>
        <Link to='/Contect' className=' bg-amber-300 text-white hidden  rounded-xl shadow-lg  hover:bg-amber-400 w-24 h-9 md:flex items-center justify-center font-semibold '>Booking</Link>
      </div>
    </header>
   
   <div className={`w-full transition-transform duration-500 ease-in-out  ${open ? "translate-y-0" : "-translate-y-150"} z-10 fixed flex-col flex p-4 gap-2 bg-white mt-16`}>
     <nav className=' flex flex-col translate-y-0  items-center h-auto gap-5 text-md font-bold'>

          <Link className='hover:text-amber-300 text-gray-600' to='/Hero'>Home</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/About'>About</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Profile'>Profile</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Service'>Services</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Packages'>packages</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Contect'>Contect</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Oders'>Oders</Link>
        </nav>

   </div>

    </div>
  )
}

export default Headers