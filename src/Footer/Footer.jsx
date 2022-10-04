import React from 'react'
import "./Footer.css";
import { links } from './data';

const Footer = () => {
  console.log(links)
  return (
    <div className='footer-links mt-16'>
           {
              links.map((item,index)=>(
                  <ul key={index} className = "flex links-container flex-col p-5">
                      <li className='flex flex-col'>
                          <div className='footer-title'>
                          <p className='text-white font-semibold mb-2'>{item.title}</p>
                          </div>
                          <a className='leading-8' href={`#${item.subTitle1}`}>{item.subTitle1}</a>
                          <a className='leading-8' href={`#${item.subTitle2}`}>{item.subTitle2}</a>
                          <a className='leading-8' href={`#${item.subTitle3}`}>{item.subTitle3}</a>
                          <a className='leading-8' href={`#${item.subTitle4}`}>{item.subTitle4}</a>
                          <a className='leading-8' href={`#${item.subTitle5}`}>{item.subTitle5}</a>
                          <a className='leading-8' href={`#${item.subTitle6}`}>{item.subTitle6}</a>
                          <a className='leading-8' href={`#${item.subTitle7}`}>{item.subTitle7}</a>
                      </li>
                  </ul>
              ))
           }
           <div className='copy-right'>
                  <p className='text-center mt-6'>
                  © 2022 Shortly | Handmade in Yangon, Myanmar(Burma), <br/>
                   and all over the world.
                  </p> 
                  <ion-icon name="logo-facebook"></ion-icon>
           </div>

         <div className='social-icons mt-6 flex justify-center gap-5'>
                <i class="uil uil-facebook block"></i>
                <i class="uil uil-twitter block"></i>
                <i class="uil uil-linkedin block"></i>
                <i class="uil uil-telegram block"></i>
         </div>
    </div>
  )
}

export default Footer