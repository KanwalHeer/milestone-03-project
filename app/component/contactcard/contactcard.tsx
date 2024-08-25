
import Image from 'next/image'
import Link from 'next/link'

export default function ContactCard() {
  return (
    <div className="flex flex-col items-center md:items-start bg-[#e9ddd9] p-2">
      {/* Images Section */}
      <div className="flex flex-col md:flex-row w-full md:justify-between mb-8 md:px-14 gap-4 ">
        
        <div className="md:full w-full flex justify-center">
          <Image
            src="/fc1.png" // Replace with your image path
            alt="Image 2"
            width={800} // Set appropriate width
            height={200} // Set appropriate height
            className="rounded-tr-3xl  border-r-4 border-red-950"
          />
         </div>
         <div className="w-full text-center md:text-left px-4 md:px-8 mt-6 text-red-950">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Discover Our Exclusive Offers</h1>
         <p className="text-sm md:text-md text-[#775f58]">
         Don&apos;t miss out on our latest promotions and special deals designed to make your floral experiences even more delightful. From seasonal discounts to limited-time offers, we have something for everyone. Stay connected to enjoy these fantastic benefits and elevate your celebrations with our exquisite flowers.
          </p>
        <Link href={'/contact'}>
          <button className="bg-[#c9572b] hover:bg-[#9b3810] shadow-2xl text-[#f5eeeb] px-5 py-3 rounded-xl text-md mt-6">
            GET IN TOUCH
          </button>
        </Link>
         </div>
      </div>
      
    </div>
  )
}

