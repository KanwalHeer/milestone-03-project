import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  imageSrc: string;
  altText: string;
  name: string;
  role: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ imageSrc, altText, name, role, testimonial }) => {
  return (
    <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl">
      <p className="text-[#8a7068] text-md">
        {testimonial}
      </p>
      <div className="flex items-center mt-4">
        <Image
          className="w-8 h-8 rounded-full border border-gray-300"
          src={imageSrc}
          alt={altText}
          width={32} // Adjusted for better visibility
          height={32} // Adjusted for better visibility
        />
        <div className="ml-3">
          <h4 className="text-lg font-semibold text-red-950">{name}</h4>
          <p className="text-sm text-[#775f58]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;



