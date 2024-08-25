import React from 'react';
import Image from 'next/image';

export default function AboutCard3() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden md:flex ">
      {/* Image Section */}
      <div className="md:w-1/2">
        <Image
          src="/ff5.png"
          alt="Our Journey"
          width={700}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="p-8 md:w-1/2">
        <h1 className="text-2xl font-bold mb- text-red-950">Our Journey in the Flower Business</h1>
        <h2 className="text-lg font-semibold mb-2 text-orange-950">How It All Started</h2>
        <p className="text-[#6b544d] mb-4">
          Our love for flowers began as a small hobby. We started growing a few
          flowers in our backyard, and soon, friends and family began noticing
          and asking for arrangements. This small spark of interest led us to
          dive deeper into the world of floristry.
        </p>
        <h2 className="text-lg font-semibold mb-2 text-orange-950">Our Mission</h2>
        <p className="text-[#6b544d] mb-4">
          Our mission is to bring beauty and joy into people&apos;s lives through the
          art of flowers. We believe that every bouquet tells a story, and we&apos;re
          here to help you tell yours.
        </p>
        <h2 className="text-lg font-semibold mb-2 text-orange-950">Growing With Love</h2>
        <p className="text-[#6b544d]">
          We carefully select each flower, ensuring that it&apos;s grown with love
          and care. Our dedication to quality and customer satisfaction is at
          the heart of everything we do.
        </p>
      </div>
    </div>
  );
}
