import React, { useState } from 'react'
import "./Navbar.css";
import logo from "../assets/logo.svg"
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import { dropdown } from './bitly';
import {nav} from "./bitly";

const Navbar = () => {
    const [navMenu,setNavMenu] = useState("navMenu");
    const [toggle,setToggle]  = useState(true);
    const changeToggle = ()=>{
           setToggle(prev=>!prev);
           setNavMenu(show=>{
                return show === "navMenu" ? setNavMenu("navMenu show-nav-menu") : setNavMenu("navMenu");
           });
};
     //dropdown function
  const [drop1,setDrop1] = useState("hide-drop1")
  const showDrop1 = ()=>{
         return drop1 === "hide-drop1" ? setDrop1("hide-drop1 show-drop1") : setDrop1("hide-drop1");
}

   const [drop2,setDrop2] = useState("hide-drop2")
   const showDrop2 = ()=>{
          return drop2 === "hide-drop2" ? setDrop2("hide-drop2 show-drop2") : setDrop2("hide-drop2");
}

   const [drop3,setDrop3] = useState("hide-drop3")
   const showDrop3 = ()=>{
          return drop3 === "hide-drop3" ? setDrop3("hide-drop3 show-drop4") : setDrop3("hide-drop3");
}

  return (
    <div className='nav-controller'>
        <nav className='nav-container flex flex-col'>
        <div className='flex nav-1 justify-between w-full fixed'>
            <div className='nav-logo'>
                    <img  src = {logo} alt = "Shortly" className = "cursor-pointer w-32 h-auto"/>
            </div>
                      
            <div className='nav-menu'>
                  <img onClick={changeToggle}  src = {toggle ? menu : close} className = "cursor-pointer block w-6"/>
            </div>
        </div>

        <div className={`nav-2 hidden my-20 ${navMenu} w-full h-full fixed overflow-scroll `}>
              <div className='nav-menu-1'>
                  {/* nav-drop-bar-1 start  */}
                  <div className='nav-drop-1'>    
                    {
                        dropdown.map(data=>(
                              data.data1.map((item,index)=>(
                                   <div className='menu-item1' key={index}>
                                           <h2 onClick={showDrop1}  className='antialiased text-2xl cursor-pointer'>{item.header}</h2>
                                           <div className={`menu-data1 flex my-2 py-1 gap-5 ${drop1}`}>
                                                  <div className='menu-icon'>
                                                          <img width="25px" src = {item.source}/>
                                                  </div>
                                                  <div className='menu-message cursor-pointer'>
                                                        <h3 className='text-lg font-medium'>{item.title}</h3>
                                                        <p>{item.message}</p>
                                                  </div>
                                           </div>
                                   </div>
                              ))
                        ))
                    }
                  </div>
                  {/* nav-drop-bar-1 end */}

                  {/* nav-drop-bar-2 start  */}
                       <div className='nav-drop-2 mt-5'>
                         
                         {
                             dropdown.map(data=>(
                                   data.data2.map((item,index)=>(
                                        <div className='menu-item2' key={index}>
                                                <h2 onClick={showDrop2} className=' antialiased text-2xl cursor-pointer'>{item.header}</h2>
                                                <div className={`menu-data2 flex ${drop2} my-2 py-1 gap-5`}>
                                                       <div className='menu-icon'>
                                                               <img width="25px" src = {item.source}/>
                                                       </div>
                                                       <div className='menu-message cursor-pointer'>
                                                             <h3 className='text-lg font-medium'>{item.title}</h3>
                                                             <p>{item.message}</p>
                                                       </div>
                                                </div>
                                        </div>
                                   ))
                             ))
                         }
                       </div>
                  {/* nav-drop-bar-2 end */}
                       
                  {/* nav-drop-bar-3 start  */}
                  <div className='nav-drop-3 mt-5'>
                         
                         {
                             dropdown.map(data=>(
                                   data.data3.map((item,index)=>(
                                        <div className='menu-item3' key={index}>
                                           <h2 className=' antialiased text-2xl cursor-pointer'>{item.header}</h2>
                                        </div>
                                   ))
                             ))
                         }
                       </div>
                  {/* nav-drop-bar-3 end */}
                  
                  {/* nav-drop-bar-2 start  */}
                  <div className='nav-drop-4 mt-5'>
                         
                         {
                             dropdown.map(data=>(
                                   data.data4.map((item,index)=>(
                                        <div className='menu-item4' key={index}>
                                                <h2 onClick={showDrop3} className=' antialiased text-2xl cursor-pointer'>{item.header}</h2>
                                                <div className= {`menu-data4 flex ${drop3} my-2 py-1 gap-5`}>
                                                       <div className='menu-icon'>
                                                               <img width="25px" src = {item.source}/>
                                                       </div>
                                                       <div className='menu-message cursor-pointer'>
                                                             <h3 className='text-lg font-medium'>{item.title}</h3>
                                                             <p>{item.message}</p>
                                                       </div>
                                                </div>
                                        </div>
                                   ))
                             ))
                         }
                       </div>
                       {/* nav-drop-bar-2 end */}
              </div>
              <div className='nav-menu-2 flex flex-col mt-10 text-center justify-center gap-5 '>
                     <div className='login'>
                          <button className='text-white'>Login</button>
                     </div>
                     <div className='sign-up'>
                          <button className='text-white'>Sign up free</button>
                     </div>
                     <div className='quote'>
                          <button className='text-white cursor-pointer'>Get a Quote</button>
                     </div>
              </div>
        </div>
       </nav>

       <nav className='nav-content flex'>
             <div className='nav-content-1'>
                  <div className='nav-logo'>
                          <img  src = {logo} alt = "Shortly" className = "cursor-pointer w-32 h-auto"/>
                  </div>

                  <ul>
                      {
                         nav.map((item,index)=>(
                              <li key={index}>
                                     <a href={`#${item.title}`}>{item.title}</a>
                              </li>  
                         ))
                      }
                  </ul>
             </div>

             <div className='nav-content-2'>
                  <div className='a-login'>
                     <button>Login</button>
                  </div>
                  <div className='a-signup'>
                      <button>Sign up Free</button>
                  </div>
                  <div className='a-quote'>
                  <button className='text-white text-center'>Get a Quote</button>
                  </div>
             </div>
       </nav>
    </div>
  )
}

export default Navbar