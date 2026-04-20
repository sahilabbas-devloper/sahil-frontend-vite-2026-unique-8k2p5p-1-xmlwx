import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import{ motion} from "framer-motion"
const BASE_URL= import.meta.env.VITE_API_URL;

function Oders() {

const [orders,setorders] = useState([])


  const fetchdata = async () => {
    try {
       const res = await axios.get(`${BASE_URL}/api/details/recive`)
   setorders(res.data)
    } catch (error) {
      console.log(error)
    }


  }


  return (
    <div>
  <div>
    <section
      id="Oders"
      className="bg-orange-50 w-full py-16 flex justify-center"
    >
      <div className="w-full  px-4">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-3xl md:text-4xl text-black font-bold">
            Order <span className="text-pink-400">Details</span>
          </h1>
          <p className="text-slate-500 text-sm mt-2 ">
            Comprehensive wedding photography services tailored to your needs. See your orders below.
          </p>
        </div>

        {/* Orders Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {orders.map((order) => (
            <motion.div
              key={order._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-5 
                         w-full sm:w-[48%] md:w-[32%] lg:w-[24%]"
            >
              <h1 className="mb-4 text-xl font-semibold text-gray-800">
                Your Order
              </h1>

              <h3 className="mb-2 font-medium border-b pb-1">
                Name: <span className="font-normal">{order.name}</span>
              </h3>
              <h3 className="mb-2 font-medium border-b pb-1">
                Email: <span className="font-normal">{order.email}</span>
              </h3>
              <h3 className="mb-2 font-medium border-b pb-1">
                Date: <span className="font-normal">{order.date}</span>
              </h3>
              <h3 className="mb-2 font-medium border-b pb-1">
                Package: <span className="font-normal">{order.packages}</span>
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={fetchdata}
            className="bg-pink-500 text-white hover:bg-pink-600 
                       rounded-3xl font-semibold px-8 py-2"
          >
            New Orders
          </button>
        </div>

      </div>
    </section>
  </div>
</div>

  )
}

export default Oders