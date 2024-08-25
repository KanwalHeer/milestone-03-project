import Image from 'next/image'

export default function AboutCard1() {
  return (
    <div className="flex flex-col items-center md:items-start bg-[#f5eeeb] p-2">
      {/* Images Section */}
      <div className="flex flex-col md:flex-row w-full md:justify-between mb-8 md:px-8 gap-2 ">
         <div className="md:w-1/1 w-full flex justify-center mb-4 md:mb-0">
          <Image
            src="/f8.png" // Replace with your image path
            alt="Image 1"
            width={300} // Set appropriate width
            height={300} // Set appropriate height
            className="rounded-t-full"
          />

         </div>
         {/* Text Section */}
         <div className="w-full text-center md:text-left px-4 md:px-8 mt-6  text-red-950">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Blossoming Your Special Moments with Nature&apos;s Finest</h1>
           <p className="text-sm md:text-md text-[#775f58]">
             At our flower shop, we are dedicated to turning your special moments into unforgettable memories with the finest blooms nature has to offer. Our passionate team meticulously curates each arrangement to ensure that every bouquet is a masterpiece, embodying elegance, beauty, and freshness. Whether you&apos;re celebrating a milestone, expressing love, or simply brightening someone&apos;s day, our flowers are crafted to bring joy and enchantment to every occasion. Discover the art of floral excellence and let us help you create moments that truly blossom.
           </p>

         </div>

            {/* Images Section */}
         <div className="md:w-1/1 w-full flex justify-center">
          <Image
            src="/f10.png" // Replace with your image path
            alt="Image 2"
            width={300} // Set appropriate width
            height={300} // Set appropriate height
            className="rounded-t-full"
          />
         </div>
      </div>
    </div>
  )
}

