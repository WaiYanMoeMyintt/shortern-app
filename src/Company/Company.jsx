import React from 'react'
import "./Company.css"
import disney from "../assets/disney.svg";
import navasol from "../assets/novasol.svg";
import marriott from "../assets/marriott.svg";
import newyork from "../assets/new-york-times.svg";
import electronic from "../assets/electronic-arts.svg";
import bigFish from "../assets/big-fish.svg";
const Company = () => {
  return (
    <div className='company-container mt-12'>
            <div className='company-title'>
            <h1 className='text-center font-bold'>
                 Lovely by big and <br/>
                 small brands <br/>
                 everywhere
             </h1>
            </div>

            <div className='company-logo flex justify-between items-center mt-12 p-4'>
                  <div className='brand-1'>
                        <img src = {bigFish} alt = "bigFish" />
                        <img src = {newyork} alt = "newyork times" />
                        <img src = {electronic} alt = "Electronic" />
                  </div>
                  <div className='brand-2'>
                        <img src = {disney} alt = "disney" />
                        <img src = {navasol} alt = "navasol" />
                        <img src = {marriott} alt = "marriott" />
                  </div>
            </div>
    </div>
  )
}

export default Company