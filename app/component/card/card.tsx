import React from "react";

const Card = ({ id, heading, text }: any) => {
  return (
    <div className="bg-[#f0ebe9] text-gray-700 p-8 border border-l-8 rounded-tr-3xl border-l-red-950 hover:shadow-2xl transition-shadow duration-300  flex flex-col flex-grow min-h-full">
      <div className="flex-grow">
        <h1 className="text-red-700 mb-2">{id}</h1>
        <h2 className="text-xl text-red-950 font-semibold mb-2">{heading}</h2>
        <p className="text-[#775f58] mb-4">{text}</p>
      </div>
    </div>
  );
};

export default Card;

