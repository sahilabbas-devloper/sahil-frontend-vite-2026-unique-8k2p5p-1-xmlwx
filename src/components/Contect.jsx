import React, { useState } from 'react'
import { MdLocationOn } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import axios from 'axios'
const BASE_URL= import.meta.env.VITE_API_URL;

function Contect() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [date, setdate] = useState('')
  const [packages, setpackages] = useState('')
  const [massage, setmassage] = useState('')
  const [Loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
   
    try {
      const res = await axios.post(`${BASE_URL}/api/orders/send`, { name, email, date, packages, massage })
      console.log(res)
      alert(res.data.massage || " order sucessfully")
      setname('')
      setemail('')
      setdate('')
      setmassage('')
    } catch (error) {
      console.log(error)
      alert("Something went wrong");
    } finally {
      setLoading(false)
    }
  };


  return (
    <div>
      <div>
        <section id='Contect' className='bg-orange-50 w-full min-h-screen flex flex-col items-center py-10 px-4'>
          <div className='flex items-center justify-evenly flex-col'>
            <h1 className='text-3xl text-black font-bold'>let's <span className='text-amber-300'>Connect</span></h1>
            <p className='text-slate-500 text-sm mt-2'>Ready to capture your love story? Get in touch to discuss your wedding.</p>
            <p className='text-slate-500 text-sm mb-15'>photography needs.</p>
          </div>
          <div className='flex flex-col lg:flex-row gap-10 w-full max-w-6xl justify-center'>
            <div>
              <form onSubmit={submit} className='bg-white p-6 w-full max-w-md rounded-md shadow-2xl text-sm' action="">
                <h1 className='text-lg font-semibold text-black mb-2'>Send us a message</h1>
                <div className='flex flex-col sm:flex-row gap-3 mb-3'>
                  <div className='flex flex-col'>
                    <label className='mb-1' >Your Name</label>
                    <input type="name"
                    required
                    value={name}
                      className='outline-none border rounded-xs p-1 border-gray-400 text-sm'
                      placeholder='Enter your name'
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='mb-1' >Your Email</label>
                    <input type="email"
                     required
                    value={email}
                      className='outline-none border rounded-xs p-1 border-gray-400 text-sm'
                      placeholder='Enter your email'
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className='flex flex-col'>
                    <label className='mb-1'>Wedding Date</label>
                    <input type="datetime-local"
                     required
                    value={date}
                      className='outline-none border rounded-xs p-1 border-gray-400 text-sm mb-3'
                      onChange={(e) => setdate(e.target.value)}
                    />
                  </div>
                </div>
                <label className='mb-1'>Packages</label>
                <div>
                  <select 
                  required
                  className=' w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-3' value={packages} onChange={(e) => setpackages(e.target.value)}  >
                    <option value="">Selectpackage</option>
                    <option value="899rs">899rs</option>
                    <option value="999rs">999rs</option>
                    <option value="1299rs">1,299rs</option>
                    <option value="1299rs">3,499rs</option>
                    <option value="1299rs">1,999rs</option>
                    <option value="1299rs">5,999rs</option>
                  </select>
                </div>
                <div>
                  <input type="massage"
                   required
                    value={massage}
                    placeholder='send massage'
                    className='w-full h-24 border rounded-xs p-2 text-sm mb-3'
                     maxLength={50}
                    onChange={(e) => setmassage(e.target.value)}
                  />
                </div>
                <div>
                  <button className='w-full h-10 bg-amber-300 hover:bg-amber-500 text-white font-semibold rounded-xs'
                  type='submit'
                    disabled={Loading}
                  > {Loading && (
                    <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>

                      <div className='w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin'></div>

                    </div>

                  )}
                    submit order</button>
                </div>
              </form>
            </div>


            <div className='w-full max-w-md'>
              <h1 className='text-2xl text-black font-bold mb-3'>Get in<span className='text-amber-300'>Touch</span></h1>
              <div className='flex '>
                <div>
                  <MdLocationOn className='bg-amber-400 w-13 h-11  rounded-full full mr-4 mt-2 ' />
                </div>
                <div>
                  <h1 className=' text-black font-bold' >Studio Location</h1>
                  <p className='text-slate-500 text-sm mt-1' >Weding zone</p>
                  <p className='text-slate-500 text-sm'>purani bazar jaunpur, Utter pradesh</p>
                </div>
              </div>

              <div className='flex mt-3'>
                <div>
                  <FaPhone className='bg-amber-400 w-12 h-11 rounded-full full mr-4 mt-2 ' />
                </div>
                <div>
                  <h1 className=' text-black font-bold' >Call Us</h1>
                  <p className='text-slate-500 text-sm mt-1' >+91 89480-05489</p>
                  <p className='text-slate-500 text-sm'>mon-Fri: 9am-6pm lST</p>
                </div>
              </div>

              <div className='flex mt-3 '>
                <div>
                  <IoMdMail className='bg-amber-400 w-13 h-11  rounded-full full mr-4 mt-2 ' />
                </div>
                <div>
                  <h1 className=' text-black font-bold' >Email Us</h1>
                  <p className='text-slate-500 text-sm mt-1' >contact@photography.com</p>
                  <p className='text-slate-500 text-sm'>Response within 24 hours</p>
                </div>
              </div >
              <h1 className='mt-6 text-xl font-semibold'>Frequently Asked Question</h1>
              <div className='text-sm  border-b '>
                <h1 className='mt-6 font-semibold'>How far in advance should we book?</h1>
                <p className='mt-1 text-slate-500'> We recommend booking 9-12 months in advance for wedding dates,</p>
                <p className='mb-2 text-slate-500 '>especially for populer seasons.</p>
              </div>

              <div className='text-sm  border-b '>
                <h1 className='mt-6 font-semibold'>Do you travel for weddings?</h1>
                <p className='mt-1 text-slate-500'> yes! We love Destination weddings? Travel fees may apply outside of our</p>
                <p className='mb-2 text-slate-500 '>location area.</p>
              </div>


            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contect