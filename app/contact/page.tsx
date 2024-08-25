import React from 'react'
import Image from 'next/image'
import Header from '../component/header/header'
import Footer from '../component/footer/footer'
import ContactImageCard from './contactimagecard/contact'

export default function Contact() {
  return (
    <div>
       {/* bg image */}
       <div className="relative overflow-hidden md:h-[65vh] flex flex-col items-center justify-center text-center">
         <div className="absolute inset-0">
         <Image
           src="/f1.png"
           alt="Background"
           fill
           style={{ objectFit: 'cover' }}
           quality={100}
           className="opacity-800"
         />
         </div>
         <div className="absolute inset-0 bg-black bg-opacity-65"></div>
         <div className="relative z-20 p-4 mt-4">
         <h1 className="text-[#f5eeeb] text-3xl md:text-5xl font-extrabold">
            Contact Us
          </h1>
         </div>
         <div className="relative z-20 p-4 mb-4">
         <p className="text-[#f5eeeb] text-lg md:text-xl">
           Flowers are the poetry of the earth, whispering beauty and grace in every petal.
         </p>
         </div>
       </div>

       {/* header */}
       <div>
        <Header/>
       </div>

       {/* form section */}
       <div>
       <ContactImageCard/>
       </div>
       
       {/* Footer*/}
       <div>
        <Footer/>
       </div>
    </div>
  )
}
