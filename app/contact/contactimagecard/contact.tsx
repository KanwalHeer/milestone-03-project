import React from 'react'
import { FaHome, FaPhone, FaEnvelope, FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function ContactImageCard() {
  return (
    <div>
      <h1 className='text-center text-3xl text-red-950 font-extrabold p-8 md:text-2xl'>Contact Us</h1>
      <section className="contact-us bg-gray-100 py-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Get in touch section */}
            <div className="flex-1 bg-white p-6 shadow-lg rounded-lg flex flex-col justify-between">
              <h1 className="text-3xl font-bold mb-2 text-red-950">Get in touch</h1>
              <div>
                <div className="flex items-center mb-3">
                  <FaHome className="mr-2 text-xl hover:text-red-500 transition-colors" />
                  <div>
                    <h5 className="font-bold text-orange-950">ABC4 Road, ABC Building</h5>
                    <p className='text-[#775c50] text-sm'>Ghulshan e maymar , karach , </p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <FaPhone className="mr-2 text-xl hover:text-red-500 transition-colors" />
                  <div>
                    <h5 className="font-bold text-orange-950">+92-123456789</h5>
                    <p className='text-[#775c50] text-sm'>Monday To Saturday, 9AM To 6PM</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <FaEnvelope className="mr-2 text-xl hover:text-red-500 transition-colors" />
                  <div>
                    <h5 className="font-bold text-orange-950">xyz@email.com</h5>
                    <p className='text-[#775c50] text-sm'>Email Us Your Query</p>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2 text-red-950">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                    <FaFacebookSquare className="text-2xl" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                    <FaTwitterSquare className="text-2xl" />
                  </a>
                  <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a href="https://www.linkedin.com/in/kanwal-heer-b3b7b62b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a href="https://youtube.com/@hellocoders-nfk?si=ULUXXH_jnkv58m7O" className="text-red-600 hover:text-red-800 transition-colors">
                    <FaYoutube className="text-2xl" />
                  </a>
                </div>
              </div>
            </div> 

            {/* Send message section */}
            <div className="flex-1 bg-white p-6 shadow-lg rounded-lg flex flex-col justify-between">
              <h1 className="text-3xl font-bold mb-4 text-center text-red-950">Send Message</h1>
              <form className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="input-field border border-gray-300 rounded p-3"
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="input-field border border-gray-300 rounded p-3"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="input-field border border-gray-300 rounded p-3"
                />
                <button
                  type="submit"
                  className="hero_btn btn py-2 px-4 bg-orange-700 hover:bg-orange-800 text-[#f5eeeb] rounded-full inline-block"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
