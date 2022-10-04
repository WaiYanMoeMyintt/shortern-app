import React from 'react'
import "./Card.css";
import { card } from './data';
import link from "../assets/icons/link-m.svg"
const Card = () => {
  return (
       <>
           <div className='card-content mt-16'>
                  <div className='card-title text-center py-5  font-semibold '>
                       <h1>
                       Bitly’s Connections <br/>
                        Platform
                      </h1>
                  </div>
                  <div className='card-message text-center'>
                      <p className='leading-8'>
                      All the products you need<br/>
                      to build brand connections,<br/>
                      manage links and QR Codes,<br/>
                      and connect with audiences<br/>
                      everywhere, in a single unified<br/>
                      platform.
                      </p>
                  </div>
           </div>

           <div className='card-container mt-16 flex flex-wrap justify-center gap-5'>
               {
                  card.map((item,index)=>(
                       <div key={index} className='card-grip w-96 py-12 px-4 rounded-2xl outline-none'>
                               <div className='card-title mb-8 flex gap-5'>
                                    <img className='inline' src = {item.icon} />
                                    <h3 className='font-bold'>{item.title}</h3>
                               </div>

                               <div className='card-sub-title'>
                                     <p className='my-12 mx-0'>{item.subtitle}</p>
                               </div>

                               <ul className='card-features'>
                                    <p className='card-feature-title my-4 mx-0 font-semibold '>{item.messageTitle}</p>
                                    <li className='my-8 mx-0'>
                                        <img width="20px" className='inline' src={item.check}/>
                                        <span>{item.message1}</span>
                                    </li>
                                    <li className='my-8 mx-0'>
                                        <img width="20px" className='inline' src={item.check}/>
                                        <span>{item.message2}</span>
                                    </li>
                                    <li className='my-8 mx-0'>
                                        <img width="20px" className='inline' src={item.check}/>
                                        <span>{item.message3}</span>
                                    </li>
                                    <li className='my-8 mx-0'>
                                        <img width="20px" className='inline' src={item.check}/>
                                        <span>{item.message4}</span>
                                    </li>
                               </ul>
                              <div className='card-button flex flex-col justify-center'>
                                   <button className='block text-center rounded-lg text-white free'>{item.free}</button>
                                   <button className='learn my-4 mx-0 text-center inline-bock'>{item.learn}</button>
                              </div>
                       </div>
                  ))
               }
           </div>
       </>
  )
}

export default Card