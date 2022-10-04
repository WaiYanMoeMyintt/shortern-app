import React from 'react'
import "./Question.css";
import { askQuestions } from './data';
const Question = () => {
  return (
    <div className='question-container mt-16'>
        <div className='question-title'>
            <h1 className='text-center font-bold'>
                 Frequently asked <br/>
                 questions<br/>
             </h1>
        </div>

        <div className='list-questions mt-16'>
             {
                  askQuestions.map((item,index)=>(
                      <details key={index} className='question-content py-4 px-8 my-5'>
                             <summary className='cursor-pointer font-semibold'> {item.title}</summary>
                             <p className='mt-4'>{item.message}</p>
                      </details>
                  ))
             }
        </div>
    </div>
  )
}

export default Question