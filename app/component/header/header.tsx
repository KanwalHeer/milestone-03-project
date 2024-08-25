
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className="flex items-center justify-center p-4 bg-yellow-950/10 text-red-700 font-bold shadow-xl sticky top-0 z-50 max-w-full overflow-x-hidden">
        {/* Hamburger Menu Button for Mobile */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-red-800 text-xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navbar Links for Medium and Larger Screens */}
        <div className="hidden md:flex space-x-4">
          <Link href="/myproduct" className="hover:text-red-900 border-t-4 border-transparent hover:border-red-900 px-6 py-2 transition duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/shop" className="hover:text-red-900 border-t-4 border-transparent hover:border-red-900 px-6 py-2 transition duration-300 ease-in-out">
            Shop
          </Link>
          <Link href="/about" className="hover:text-red-900 border-t-4 border-transparent hover:border-red-900 px-6 py-2 transition duration-300 ease-in-out">
            About
          </Link>
          <Link href="/contact" className="hover:text-red-900 border-t-4 border-transparent hover:border-red-900 px-6 py-2 transition duration-300 ease-in-out">
            Contact
          </Link>
        </div>

        {/* Modal for Mobile Screens */}
        {isOpen && (
          <div className="fixed inset-0 rounded-3xl  border-4 border-red-950 bg-[#f0ebe9] bg-opacity-85 z-50 p-4 flex flex-col space-y-4 md:hidden">
            <button onClick={toggleMenu} className="text-red-200 text-3xl self-end bg-red-950 p-2 rounded-full">
              <FaTimes />
            </button>

            <Link href="/myproduct" className="text-red-800 hover:text-red-200 rounded-2xl px-4 py-2 transition duration-300 ease-in-out" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-red-800 hover:text-red-200 rounded-2xl px-4 py-2 transition duration-300 ease-in-out" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/shop" className="text-red-800 hover:text-red-200 rounded-2xl px-4 py-2 transition duration-300 ease-in-out" onClick={toggleMenu}>
              Shop
            </Link>
            <Link href="/contact" className="text-red-800 hover:text-red-200 rounded-2xl px-4 py-2 transition duration-300 ease-in-out" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
