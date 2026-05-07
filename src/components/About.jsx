import React from 'react'
import { motion } from "framer-motion"
import { FaCamera } from 'react-icons/fa'
import { FaAward } from 'react-icons/fa'
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div>
        <section id='About' className='bg-orange-50 w-full py-16 px-4 flex flex-col md:flex-row items-center gap-50 relative'>
          
          <div>
            <motion.div
              initial={{ opacity: 0, right: 50 }}
              whileInView={{ opacity: 1, left: 20 }}
              transition={{ duration: 0.8 }}
             className='w-full h-100 max-w-sm md:max-w-md rounded-2xl shadow-lg overflow-hidden'
            >
              <img
               className='w-full h-auto object-cover'
                src="https://images.pexels.com/photos/1540977/pexels-photo-1540977.jpeg?cs=srgb&dl=pexels-sulimansallehi-1540977.jpg&fm=jpg" alt="Photographers" />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, right: 50 }}
              whileInView={{ opacity: 1, right: 20 }}
              transition={{ duration: 0.8 }}
              className='w-full  text-sm md:text-base'
            >
              <div>


                <h1 className='text-2xl md:text-4xl text-black font-bold mb-3'>Your Stroy,<span className=' text-2xl md:text-4xl text-pink-500'>Beautifully Told</span></h1>
                <p className='text-slate-500 mb-4'>hi, i'm sarah. as a passionate wedding photographer with over 12 years of experience, i believe that every love story deserves to be told in the most beautiful way.</p>
                <p className='text-slate-500 mb-2'>my approach combines artistic vision with a documentary style, capturing both the grand moments and the intimate details that make your wedding uniquely yours.</p>

                <div className='flex flex-col sm:flex-row gap-6 mt-6'>
                  <div>
                    <div className='flex '>
                      <div>
                        <FaCamera className='bg-amber-400 w-15 h-13   rounded-2xl full mr-4 mt-6 ' />
                      </div>
                      <div>
                        <h1 className=' text-black font-bold mt-4' >candid & Natural</h1>
                        <p className='text-slate-500 text-sm mt-1' >capturing genuine</p>
                        <p className='text-slate-500 text-sm'>emotions and moments</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='flex'>
                      <div >
                        <FaAward className='bg-amber-400 w-15 h-13   rounded-2xl full mr-4 mt-6 ' />
                      </div>
                      <div>
                        <h1 className=' text-black font-bold mt-4' >Award Winning</h1>
                        <p className='text-slate-500 text-sm mt-1' >Recognized excellence in wedding</p>
                        <p className='text-slate-500 text-sm'>photography</p>
                      </div>
                    </div>
                  </div>


                </div>
                <Link to="/Packages" className=' inline-flex items-center justify-center px-6 h-10 rounded-3xl font-semibold mt-6 bg-pink-500 hover:bg-amber-400 text-white'>let,s Touch</Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About