// imports
import Image from 'next/image'
import Link from 'next/link'

// component start
export default function ImageCard() {
  return(
    <div className="flex flex-col items-center md:items-start bg-[#f5eeeb] p-2">
       {/* Images Section */}
       <div className="flex flex-col md:flex-row w-full md:justify-between mb-8 md:px-14 gap-4 ">
         {/* image 1 */}
         <div className="md:w-1/2 w-full flex justify-center mb-4 md:mb-0">
           <Image
            src="/f8.png" // Replace with your image path
            alt="Image 1"
            width={250} // Set appropriate width
            height={700} // Set appropriate height
            className="rounded-t-full shadow-2xl"   />
          </div>

          {/* image 2 */}
          <div className="md:w-1/2 w-full flex justify-center">
           <Image
            src="/f10.png" // Replace with your image path
            alt="Image 2"
            width={250} // Set appropriate width
            height={700} // Set appropriate height
            className="rounded-t-full shadow-2xl"  />
          </div>

          <div className="w-full text-center md:text-left px-4 md:px-8 mt-6  text-red-950">
           {/* heading */}
           <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Blossoming Your Special Moments with Nature&apos;s Finest</h1>
          
           {/* peragraph */}
           <p className="text-sm md:text-md text-[#775f58]">
             Experience the enchanting beauty of nature with our carefully curated selection of floral arrangements. Whether it&apos;s a wedding, anniversary, or any other special occasion, our flowers bring elegance and joy to every moment. With a commitment to freshness and quality, each bouquet is designed to make your celebrations truly memorable.
           </p>

           {/* button */}
           <Link href={'/about'}> <button  className='bg-[#c9572b] hover:bg-[#9b3810] shadow-2xl text-[#f5eeeb] px-5 py-3 rounded-xl text-md mt-6'>READ MORE</button></Link>
         </div>
      </div>
    </div>
  )
}

