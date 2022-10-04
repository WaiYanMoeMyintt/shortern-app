import React, { useState,useEffect } from 'react'
import "./Short.css";
const Short = () => {
  const [checkInput,changeInput] = useState("");
  const [data,setData]      = useState('');
  const [btntext,setBtnText] = useState('Copy');
  const [message,setMessage] = useState('');
  const [error,setError] =  useState("");
  
const shortURLSubmit = (e)=>{
       e.preventDefault();
       if(checkInput === ''){
          setError(()=>{
                const valid = document.querySelector(".valid-string");
                         valid.classList.add("valid");
                         setTimeout(()=>{
                         valid.classList.remove("valid");
                         },4000)
               return valid;
          })
       }
       else if(checkInput !== ''){
          const getData = async ()=>{
               const getUrl = await fetch(`https://api.shrtco.de/v2/shorten?url=${checkInput}`);
                     const getData  = await getUrl.json();
                     setData(getData.result);
                     console.log(getData);
          }
          getData();
       }
       
    return e;
  }
  const copyToClipboard = (s)=>{
       s.preventDefault();
       navigator.clipboard.writeText(data.full_short_link);
       setBtnText((text)=>{
            return text === "Copy" ? "Copied" : "Copied";
       });
}

  return (
      <form className='mt-8 short-url-container w-full' onSubmit={shortURLSubmit}>
             <div className='short-url-input flex flex-col justify-center items-center'>
                 <div className='input-field'>
                 <input 
                  type="text"
                  value={checkInput}
                  onChange={v=>changeInput(v.target.value)}
                  className='block overflow-hidden whitespace-nowrap text-ellipsis'
                   placeholder='Shorten your link'/>
                 </div>
                <div className='input-button'>
                <button onClick={shortURLSubmit} className='text-center text-white block' type="button">Shorten</button>
                </div>
             </div>

             <div className={`valid-url ${message}`}>
                    <div className='valid-string rounded-lg p-4 text-white text-center'>
                            <p>
                                 Please, provide a valid url
                            </p>
                    </div>
                    
             </div>
             <div  className={`short-url-data`}>
                 <div className='short-url py-8 px-0 rounded-lg'>
                     <div className='short-url-link my-5 text-center'>
                        <a href={data.full_short_link} className = "text-blue font-semibold" target = "_blank">{data.full_short_link}</a>
                   </div>
                    
                    <div className='full-url-link my-3 text-center'>
                      <p className='block overflow-hidden w-100 text-center whitespace-nowrap text-ellipsis'>{data.original_link}</p>
                   </div>
                    
                    <div className='copy-button my-5 text-center'>
                   <button onClick={copyToClipboard} className = "text-white rounded-lg text-center block" type='submit'>{btntext}</button>
                   </div>
                
                </div>
             </div>
      </form>
  )
}

export default Short