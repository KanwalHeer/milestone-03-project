import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-orange-950 text-white p-6">
      {/* Website Name */}
      <div className="text-center text-lg font-bold mb-4">
        MyFlowers
      </div>

      {/* Navigation Links */}
      <div className="text-center mb-4">
        <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6">
          <li><Link href="myproduct" className="hover:underline hover:text-red-200">Home</Link></li>
          <li><Link href="shop" className="hover:underline hover:text-red-200">Shop</Link></li>
          <li><Link href="about" className="hover:underline hover:text-red-200">About</Link></li>
          <li><Link href="contact" className="hover:underline hover:text-red-200">Contact</Link></li>
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="text-center">
        <ul className="flex flex-row space-x-2 md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <Link href="#" aria-label="Facebook" className="hover:text-red-200">
              <FaFacebookF size={24} />
            </Link>
          </li>
          <li>
            <Link href="#" aria-label="Twitter" className="hover:text-red-200">
              <FaTwitter size={24} />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/kanwal-heer-b3b7b62b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="Instagram" className="hover:text-red-200">
              <FaLinkedinIn size={24} />
            </Link>
          </li>
        </ul>
      </div>

      {/* Farewell Button */}
      <div className="text-center mt-4">
        <Link
          href={'/'}
          className="inline-block bg-red-200 text-orange-950 py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Explore More or Return Anytime
        </Link>
        <p className="mt-2 text-sm text-gray-200">
          Thank you for visiting MyFlowers! We hope you had a delightful experience. 
          Feel free to explore more or visit us again soon. Have a great day!
        </p>
      </div>

       {/* Copyright Notice */}
       <div className="text-center mt-6 text-sm text-gray-300">
        <p>&copy; 2024 MyFlowers. All rights reserved.</p>
      </div>
    </footer>
  );
}
