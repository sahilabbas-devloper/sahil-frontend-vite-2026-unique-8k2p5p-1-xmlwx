import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { motion } from "framer-motion"
import toast, { Toaster } from 'react-hot-toast';
const BASE_URL = import.meta.env.VITE_API_URL;
//

function Oders() {

   const [name, setname] = useState('')
    const [open, setopen] = useState(false)
  const [orders, setorders] = useState()


  const fetchdata = async () => {
    setopen(true)
    try {
      const res = await axios.post(`${BASE_URL}/api/details/recive`,{ name})

      toast(res.data.message);
      setorders(res.data.neworders)
     
    } catch (error) {
        toast.error(error?.response?.data.message)
      console.log(error)
    }finally{
      setopen(false)
    }
 setname("")

  }


  return (
    <div>
      <div>
         <Toaster />
        <section
          id="Oders"
          className="bg-orange-50 w-screen py-16 flex justify-center"
        >
          <div className="w-full  px-4">

            {/* Heading */}
            <div className="flex flex-col items-center text-center mb-10">
              <h1 className="text-3xl md:text-4xl text-black font-bold">
                Find your  Order <span className="text-pink-400">Details</span>
              </h1>
              <p className="text-slate-500 text-sm mt-2 ">
                Comprehensive wedding photography services tailored to your needs. See your orders below.
              </p>
            </div>


            <div className="flex justify-center mt-10 mb-20 gap-2">
              <input type="text"
                className='bg-blue-50 w-70 h-10 outline-none p-4 shadow-xl'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <button
                onClick={fetchdata}
                className="bg-pink-500 text-white hover:bg-pink-600 
                       rounded-3xl shadow-xl font-semibold px-8 py-2"
              >
                Find

                {open && (
                                    <div className='fixed inset-0  flex items-center justify-center z-50'>

                                        <div className='w-14 h-14 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin'></div>
                                    </div>

                                )}
              </button>
            </div>

            {/* Orders Cards */}
           <div className="flex flex-col w-full overflow-hidden p-4 gap-6">
                
           {   orders &&  <motion.div
                  
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className=" rounded-xl  shadow-lg p-4 flex flex-col  w-auto sm:w-full md:w-full lg:w-full overflow-hidden bg-linear-to-r from-[#f2f2fa] via-[#f8efdb] to-[#efecf3] "
                >
                   
                  <div>
                    <h1 className="mb-4 text-md font-bold text-gray-500 ">
                      Your Order
                    </h1>
                  </div>

                  <div className='md:flex md:flex-row sm:flex-col gap-5 w-auto justify-evenly overflow-hidden'>

                  <h3 className="mb-2 font-bold flex gap-2  pb-1">
                    Name:  <span className="font-semibold "> {orders.name}</span>
                  </h3>
                  <h3 className="mb-2 font-bold  pb-1">
                    Email: <span className="font-normal">{orders.email}</span>
                  </h3>
                  <h3 className="mb-2 font-bold  pb-1">
                    Date: <span className="font-normal">{orders.date}</span>
                  </h3>
                  <h3 className="mb-2 font-bold  pb-1">
                    Package: <span className="font-normal">{orders.packages}</span>
                  </h3>

                  <h3 className="mb-2 font-bold flex gap-2 pb-1">
                    Status: <span className="font-semibold bg-amber-200 rounded-md text-amber-800 flex items-center justify-center p-1 text-sm">{orders.status}⏳</span>
                  </h3>
                  </div>

                </motion.div>}
            
            </div>

            {/* Button */}


          </div>
        </section>
      </div>
    </div>

  )
}

export default Oders