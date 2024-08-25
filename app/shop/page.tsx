import Image from "next/image";
import Header from "../component/header/header";
import Card from "../component/card/card";
import Card1 from "../myproduct/productcard/page"
import Footer from "../component/footer/footer";

const myProduct = async () => {
  async function fetchmydata() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/myapiii`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  

  const myproduct = await fetchmydata();
  console.log(myproduct);

  return (
    <div>
      <div className="relative overflow-hidden md:h-[70vh] flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/f1.png"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            className="opacity-100"
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-65"></div>

        <div className="relative z-20 p-4 mt-4">
          <h1 className="text-[#c7bcb7] text-3xl md:text-7xl font-extrabold">
            Shop Now
          </h1>
        </div>

        <div className="relative z-20 p-4 mb-4">
          <p className="text-[#f5eeeb] text-lg md:text-xl">
            Flowers are the poetry of the earth, whispering beauty and grace in
            every petal.
          </p>
        </div>
      </div>

      <Header />

      <div className="flex p-8 flex-col md:flex-row m-2 space-y-4 md:space-y-0 md:space-x-8 overflow-hidden">
        <Card
          key="01" // Ensure this is unique if there are multiple cards
          id="01"
          heading="Online Order"
          text="Order flowers easily from home with our simple online system. Fresh blooms delivered right to your door."
        />

        <Card
          key="02" // Ensure this is unique if there are multiple cards
          id="02"
          heading="Free Shipping"
          text="Enjoy free shipping on all orders. No extra charges, just beautiful flowers delivered to you."
        />

        <Card
          key="03" // Ensure this is unique if there are multiple cards
          id="03"
          heading="More Freshness"
          text="Get the freshest flowers available. We ensure top quality and lasting freshness in every bouquet."
        />
      </div>

      <div className="p-8">
        <h1 className={`text-center font-bold text-md m-8 text-orange-600`}>
          NEW ARRIVAL
        </h1>
        <h1 className="text-center font-bold text-xl md:text-4xl md:mx-8 md:px-12 text-red-950">
          Explore Our Freshest Floral Creations
        </h1>

        <p className="text-[#856d63] text-center p-2">
          Dive into our newest collection of stunning flowers, thoughtfully
          curated to bring vibrant colors and elegant fragrances to your space.
          Whether you&apos;re looking to brighten up your home or find the
          perfect gift, our latest arrivals offer something special for every
          occasion. Discover the charm and beauty of our freshest blooms and
          elevate your floral experience today.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {myproduct.map((p: any) => (
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

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default myProduct;
