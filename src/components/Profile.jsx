import React, { useState } from 'react'
import { motion } from "framer-motion"


function Profile() {
             const [activepage ,setactivepage] = useState("allphoto")

  return (
    <div>
  <div>
    <section
      id="Profile"
      className="bg-orange-50 w-auto py-16 flex flex-col items-center  "
    >
      <div className="w-full  px-4">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mt-10">
          <h1 className="text-3xl md:text-4xl text-black font-bold">
            Our <span className="text-amber-300">Profile</span>
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            A glimpse into the beautiful love stories we've had the honor capture
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-wrap justify-center gap-4 mt-8">
          <button 
          onClick={() => setactivepage("allphoto")}
          className="bg-white hover:bg-amber-300 hover:text-white rounded-3xl font-semibold px-6 py-2">
            All Photos
          </button>
          <button
           onClick={() => setactivepage("Weddings")}
          className="bg-white hover:bg-amber-300 hover:text-white rounded-3xl font-semibold px-6 py-2">
            Weddings
          </button>
          <button
           onClick={() => setactivepage("Engagements")}
          className="bg-white hover:bg-amber-300 hover:text-white rounded-3xl font-semibold px-6 py-2">
            Engagements
          </button>
          <button 
           onClick={() => setactivepage("Pre-Wedding")}
          className="bg-white hover:bg-amber-300 hover:text-white rounded-3xl font-semibold px-6 py-2">
            Pre-Wedding
          </button>
        </div>

        {/* Images */}
        {activepage === "allphoto" && (<div 
        
        className="flex w-full flex-wrap justify-center gap-5 mt-10">

          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAD7jNF3uA2_MN8xV0zt_lDVOI34s0ur564g&s",
            "https://www.sloshout.com/blog/wp-content/uploads/wedding-photographers-the-amanverse-studios-couple-shot-1_15_449054-168567082220567.jpeg",
           "https://cdn0.weddingwire.in/vendor/9168/3_2/640/jpg/wedding-photographers-smart-clicks-cinematography-couple-shot-2_15_439168-168292937836599.jpeg",
            "https://images.prismic.io/memoriesdesigner/bec7c8eb-3c4d-436e-aacc-d5b0cb62f44d_MD1_2177.jpg",
            "https://weddingphotographybysf.com/wp-content/uploads/2024/09/photo-bridal-3-scaled.webp",
            "https://dstudios.in/wp-content/uploads/2024/08/Kerala-best-place-for-pre-wedding-shoot-in-india-scaled.webp",
            "https://www.studiomemorylane.com/wp-content/uploads/2019/06/Ethnic-Punjabi-wedding-couple-photography.jpg",
            "https://www.weddingphotoplanet.com/admin_image/wid/hero_image7482552391753536143Best-Wedding-Photographer.jpg"
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] h-40 overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img}
                alt="Photo"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}

        </div>)}


 {activepage === "Weddings" && (<div 
        
        className="flex w-full flex-wrap justify-center gap-5 mt-10">

          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAD7jNF3uA2_MN8xV0zt_lDVOI34s0ur564g&s",
            "https://www.sloshout.com/blog/wp-content/uploads/wedding-photographers-the-amanverse-studios-couple-shot-1_15_449054-168567082220567.jpeg",
           "https://cdn0.weddingwire.in/vendor/9168/3_2/640/jpg/wedding-photographers-smart-clicks-cinematography-couple-shot-2_15_439168-168292937836599.jpeg",
            "https://images.prismic.io/memoriesdesigner/bec7c8eb-3c4d-436e-aacc-d5b0cb62f44d_MD1_2177.jpg",
            "https://weddingphotographybysf.com/wp-content/uploads/2024/09/photo-bridal-3-scaled.webp",
            "https://dstudios.in/wp-content/uploads/2024/08/Kerala-best-place-for-pre-wedding-shoot-in-india-scaled.webp",
           
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] h-40 overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img}
                alt="Photo"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}

        </div>)}


         {activepage === "Engagements" && (<div 
        
        className="flex w-full flex-wrap justify-center gap-5 mt-10">

          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAD7jNF3uA2_MN8xV0zt_lDVOI34s0ur564g&s",
            "https://www.sloshout.com/blog/wp-content/uploads/wedding-photographers-the-amanverse-studios-couple-shot-1_15_449054-168567082220567.jpeg",
           "https://cdn0.weddingwire.in/vendor/9168/3_2/640/jpg/wedding-photographers-smart-clicks-cinematography-couple-shot-2_15_439168-168292937836599.jpeg",
            "https://images.prismic.io/memoriesdesigner/bec7c8eb-3c4d-436e-aacc-d5b0cb62f44d_MD1_2177.jpg",
           
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] h-40 overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img}
                alt="Photo"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}

        </div>)}



 {activepage === "Pre-Wedding" && (<div 
        
        className="flex w-full flex-wrap justify-center gap-5 mt-10">

          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAD7jNF3uA2_MN8xV0zt_lDVOI34s0ur564g&s",
            "https://www.sloshout.com/blog/wp-content/uploads/wedding-photographers-the-amanverse-studios-couple-shot-1_15_449054-168567082220567.jpeg",
           "https://cdn0.weddingwire.in/vendor/9168/3_2/640/jpg/wedding-photographers-smart-clicks-cinematography-couple-shot-2_15_439168-168292937836599.jpeg",
            "https://images.prismic.io/memoriesdesigner/bec7c8eb-3c4d-436e-aacc-d5b0cb62f44d_MD1_2177.jpg",
           "https://www.sloshout.com/blog/wp-content/uploads/wedding-photographers-the-amanverse-studios-couple-shot-1_15_449054-168567082220567.jpeg",
           "https://cdn0.weddingwire.in/vendor/9168/3_2/640/jpg/wedding-photographers-smart-clicks-cinematography-couple-shot-2_15_439168-168292937836599.jpeg",
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] h-40 overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img}
                alt="Photo"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}

        </div>)}





      </div>
    </section>
  </div>
</div>

  )
}

export default Profile