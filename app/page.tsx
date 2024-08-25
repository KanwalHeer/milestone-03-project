import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* bg image div */}
      <div className="relative min-h-screen bg-cover bg-center">
        <div className="absolute inset-0">
          <Image
            src={"/f3.png"} // Replace with your image path
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-100" // Adjust the opacity here
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* responsive heading div */}

        <div
          className="flex items-center justify-center text-center mx-auto  overflow-hidden  "
          style={{ background: "rgba(0, 0, 0, 0.2)" }}
        >
          <h1 className="text-center text-red-50 mt-16 p-6 text-4xl md:mt-20 lg:m-16 lg:text-center lg:text-6xl font-extrabold z-2 relative">
            Wellcome to our Online Flower Shop{" "}
            <div className="color-layer"></div>
          </h1>
        </div>

        {/*responsive button dive */}
        <div className="flex items-center justify-center m-2">
          <Link
            href={"/myproduct"}
            className="bg-red-50 text-red-800 rounded-tr-2xl p-4 hover:bg-red-100 hover:border border-red-300 font-extrabold z-20"
          >
            Vist Shop
          </Link>
        </div>

        {/* responsive react icons div */}
        <div className="flex flex-row items-center justify-center m-8 space-x-4 text-4xl z-20">
          <Link
            href={"#"}
            className="text-red-700 hover:text-red-100 hover:bg-red-950 rounded-full shadow-md z-20"
          >
            <FaFacebook />
          </Link>
          <Link
            href={"#"}
            className="text-red-700 hover:text-red-100 hover:bg-red-950 rounded-lg shadow-md z-20"
          >
            <FaInstagram />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/kanwal-heer-b3b7b62b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            className="text-red-700 hover:text-red-100 hover:bg-red-950  shadow-md z-20"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </main>
  );
}
