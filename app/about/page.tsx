import React from 'react'
import Image from 'next/image'
import Header from '../component/header/header'
import AboutCard1 from './aboutcard1/aboutcard1'
import AboutCard2 from './aboutcard2/aboutcard2'
import AboutCard3 from './aboutcard3/aboutcard3'
import Footer from '../component/footer/footer'

export default function About() {
  return (
  <div>
    
    {/* contact bg image with text */}
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
            About Us
         </h1>
       </div>
       <div className="relative z-20 p-4 mb-4">
         <p className="text-[#f5eeeb] text-lg md:text-xl">
           Flowers are the poetry of the earth , whispering beauty and grace in every petal.
         </p>
       </div>
     </div>
      {/* call hesder */}
      <Header/>

      {/* call aboutcard1 */}
      <div className='mt-4'>
        <AboutCard1/>
      </div>
        {/* call aboutcart*/}
      <div className='mt-4'>
        <AboutCard2/>
      </div>
        {/* how we started section */}
      <div className='mt-4 bg-[#f0ebe9] p-6'>
       <AboutCard3/>
      </div>
      <div>
       <Footer/>
      </div>


   </div>
  )
}
