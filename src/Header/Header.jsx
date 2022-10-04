import React from 'react'
import "./Header.css";
import  mobile from "../assets/mobile-bg.png";
import desktop from "../assets/desktop-bg.png";
const Header = () => {
  return (
    <div className='header-container mt-8 flex flex-wrap justify-between'>
         <div className='header-brand-mobile'>
                 <img className='h-auto desktop' src = {desktop} alt = "url-shortener" />
                 <img className='h-auto mobile' src = {mobile} alt = "url-shortener" />
                
         </div>
         <div className='header-message'>
               <div className='header-message-title font-semibold mt-6'>
                    <h2>
                        We've expanded! <br/>
                        Shorten URLs. <br/>
                        Generate <br/>
                        QR Codes. And now, <br/>
                        create Link-in-bios.
                    </h2>
               </div>

               <div className='header-free mt-4 text-center mt-8 text-white'>
                   <button>Get Started for Free</button>
               </div>

               <div className='header-quote text-center py-5'>
                   <button>Get a Quote</button>
               </div>
         </div>
    </div>
  )
}

export default Header