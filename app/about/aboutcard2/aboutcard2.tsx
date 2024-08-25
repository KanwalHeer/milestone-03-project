import Image from 'next/image'

export default function AboutCard2() {
  return (
    <div className="flex flex-col items-center md:items-start bg-[#e9ddd9] p-2">
      {/* Images Section */}
      <div className="flex flex-col md:flex-row w-full md:justify-between mb-8 md:px-14 gap-4 ">
         {/* text section */}
        <div className="w-full text-center md:text-left px-4 md:px-8 mt-6  text-red-950">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">For More Funtastic Offers</h1>
        <p className="text-sm md:text-md text-[#775f58]">
          Don&apos;t miss out on our exclusive offers and exciting promotions designed to bring even more joy to your floral experience. Stay updated with our latest deals and special discounts tailored just for you. Whether you&apos;re looking for seasonal savings or unique offers on our premium floral arrangements, we have something special to make your celebrations memorable. Check back regularly or sign up for our newsletter to be the first to know about our upcoming events and exclusive deals. Enhance your moments with our beautiful blooms while enjoying fantastic savings!
        </p>

        </div>
          {/* image section */}
        <div className="md:w-1/1 w-full flex justify-center">
          <Image
            src="/fc1.png" // Replace with your image path
            alt="Image 2"
            width={900} // Set appropriate width
            height={200} // Set appropriate height
            className="rounded-tr-3xl  border-r-4 border-red-950"
          />
         </div>
      </div>
    </div>
  )
}

