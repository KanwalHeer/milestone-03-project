// imports
import Image from "next/image";
import Header from "../component/header/header";
import ImageCard from "../component/imgcard/imgcard";
import Card from "../component/card/card";
import Card1 from "./productcard/page";
import ContactCard from "../component/contactcard/contactcard";
import TestimonialCard from "../component/testimonialcard/testimonial";
import Footer from "../component/footer/footer";


const testimonials = [
  {
    imageSrc: "/fp2.png",
    altText: "User Profile 1",
    name: "Jane Doe",
    role: "Happy Customer",
    testimonial: "I had a wonderful experience with this service. The team was fantastic and very supportive throughout the process."
  },
  {
    imageSrc: "/fp2.png",
    altText: "User Profile 2",
    name: "John Smith",
    role: "Satisfied Client",
    testimonial: "Excellent service! The quality of the products exceeded my expectations and the customer support was top-notch."
  },
  {
    imageSrc: "/fp2.png",
    altText: "User Profile 3",
    name: "Alice Johnson",
    role: "Loyal User",
    testimonial: "The attention to detail and dedication to customer satisfaction made my experience truly remarkable."
  },
  {
    imageSrc: "/fp2.png",
    altText: "User Profile 4",
    name: "Robert Brown",
    role: "Content Customer",
    testimonial: "The entire process was smooth and enjoyable. I highly recommend their services to anyone in need."
  },
  {
    imageSrc: "/fp2.png",
    altText: "User Profile 5",
    name: "Emily Davis",
    role: "First-time Buyer",
    testimonial: "The flowers were fresh and beautiful. The service was prompt and the staff was very helpful."
  },
  {
    imageSrc: "/fp2.png",
    altText: "User Profile 6",
    name: "Michael Wilson",
    role: "Regular Client",
    testimonial: "Exceptional quality and service every time. They never fail to impress with their excellent products."
  },
];




// component function
const myProduct = async () => {
  
  // function for fetching data from api
 async function fetchmydata() {
    const res = await fetch("http://localhost:3000/myapiii")
    return res.json()}
   
    const myproduct = await fetchmydata()
    console.log(myproduct);


 return (
  <div>
      {/* chiled dive 01 */}
      <div className="relative overflow-hidden md:h-[90vh] flex flex-col items-center justify-between text-center">
        {/* bg image */}
         <div className="absolute inset-0">
          <Image
            src="/f1.png"
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            className="opacity-100"   />
         </div>
         <div className="absolute inset-0 bg-black bg-opacity-65"></div>
         {/* ==== */}

         {/* text on bg image */}
         <div className="relative z-20 p-4 mt-4">
            <h1 className="text-[#f5eeeb] text-3xl md:text-6xl font-extrabold">
              Welcome to Our Flower Shop
            </h1>
         </div>
        {/* ==== */}

         {/* images on bg image */}
         <div className="relative z-50 flex flex-col md:flex-row gap-8 my-8 w-full">
           {/* image 01 */}
            <div className="md:w-1/2 w-full flex justify-center">
              <Image
                src="/f4.png"
                alt="Image 1"
                width={500}
                height={300}
                className="rounded-2xl shadow-2xl shadow-slate-800 transition-transform duration-300 transform hover:scale-105 hover:shadow-3xl"
              />
            </div>
            {/* image 02 */}
            <div className="md:w-1/2 w-full flex justify-center">
              <Image
                src="/ff5.png"
                alt="Image 2"
                width={500}
                height={200}
                className="rounded-xl shadow-2xl shadow-slate-800 transition-transform duration-300 transform hover:scale-105 hover:shadow-3xl"
              />
             </div>

         </div>
         {/* ==== */}

          {/* text pera on bg image */}
         <div className="relative z-20 p-4 mb-4">
          <p className="text-[#f5eeeb] text-lg md:text-xl shadow-2xl shadow-white">
            Flowers are the poetry of the earth, whispering beauty and grace in every petal.
          </p>
         </div>
         {/* ==== */}
      </div>
      {/* chiled dive 01 end */}


      {/* chiled dive 02 start */}
      <div>
       <Header />
      </div>
      {/* chiled dive 02 end */}
   

      {/* chiled dive 03 start */}
      <div className="flex p-8 flex-col md:flex-row m-2 space-y-4 md:space-y-0 md:space-x-8 overflow-hidden">
        <Card
          key="01" // Ensure this is unique if there are multiple cards
          id="01"
          heading="Online Order"
          text="Order flowers easily from home with our simple online system. Fresh blooms delivered right to your door." />

        <Card
          key="02" // Ensure this is unique if there are multiple cards
          id="02"
          heading="Free Shipping"
          text="Enjoy free shipping on all orders. No extra charges, just beautiful flowers delivered to you." />

        <Card
          key="03" // Ensure this is unique if there are multiple cards
          id="03"
          heading="More Freshness"
          text="Get the freshest flowers available. We ensure top quality and lasting freshness in every bouquet." />

      </div>
       {/* chiled dive 03 end */}


       {/* chiled dive 04 start */}
      <div>
        <ImageCard />
      </div>
      {/* chiled dive 04 end */}


      {/* chiled dive 05 start */}
      <div className="p-8">
        <h1 className={`text-center font-bold text-md m-8 text-orange-600`}>
          NEW ARRIVAL
        </h1>
        <h1 className="text-center font-bold text-xl md:text-4xl md:mx-8 md:px-12 text-red-950">
          Explore Our Freshest Floral Creations
        </h1>

      <p className="text-[#856d63] text-center p-2">
      Dive into our newest collection of stunning flowers, thoughtfully curated to bring vibrant colors and elegant fragrances to your space. Whether you&apos;re looking to brighten up your home or find the perfect gift, our latest arrivals offer something special for every occasion. Discover the charm and beauty of our freshest blooms and elevate your floral experience today.
      </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {myproduct.map((p:any) => (
            <Card1
              key={p.id}
              name={p.name}
              price={p.price}
              description={p.description.substring(0, 100) + "..."} // Display first 100 characters
              id={p.id} // Pass postId here
              image={p.image} // Pass image URL here
            />
          ))}
        </div>
      </div>
      {/* chiled dive 05  end */}


      {/* chiled dive 06  start */}
      <h1 className="text-center text-3xl md:text-3xl font-extrabold text-red-950 mb-4 p-2 ">What Our Client Says</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-12 bg-red-50 md:m-8 rounded-lg">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index} // Ensure each key is unique
          imageSrc={testimonial.imageSrc}
          altText={testimonial.altText}
          name={testimonial.name}
          role={testimonial.role}
          testimonial={testimonial.testimonial}
        />
      ))}
    </div>
      {/* chiled dive 06 end */}


      {/* chiled dive 07 start */}
      <div className="mb-4">
        <ContactCard/>
      </div>
      {/* chiled dive 07 end */}
      

      {/* chiled dive 08 start */}
      <div>
      <Footer/>
      </div>
      {/* chiled dive 07 end */}
      
      {/* ==== */}
  </div>

  );
};

export default myProduct;



