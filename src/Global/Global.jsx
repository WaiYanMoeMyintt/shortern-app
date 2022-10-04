import React from 'react'
import "./Global.css";
import globle from "../assets/globe.png";
const Global = () => {
  return (
      <div className='global-container flex flex-col flex-wrap justify-center gap-4 mt-16 '>
           <div className='global-image'>
                <img className='h-auto max-w-xs' src= {globle} alt = "globle"/>
           </div>
           <div className='global-data py-4 px-8 mt-4 flex justify-center items-center gap-5'>
                 <div className='global-user-data'>
                      <h1 className='my-8 mx-0 font-bold' >420K</h1>
                      <h1 className='my-8 mx-0 font-bold' >5.7M</h1>
                      <h1 className='my-8 mx-0 font-bold' >256M</h1>
                      <h1 className='my-8 mx-0 font-bold' >10B</h1>
                      <h1 className='my-8 mx-0 font-bold' >800+</h1>
                 </div> 

                 <div className='global-user-info'>
                         <p>Global paying customers</p>
                         <p>monthly active users</p>
                         <p>links & QR codes created monthly</p>
                         <p>connections clicks monthly</p>
                         <p>app integrations</p>
                </div>
    
           </div>
      </div>
  )
}

export default Global