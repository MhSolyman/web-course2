import React, { useState } from 'react';
import './questions.css'

const Questions = ({ questiondetail }) => {
    const { question, options, correctAnswer } = questiondetail;
   const [rel, setReal] = useState()
    const b=(correctAnswer)=>{
    setReal(correctAnswer)
    }



    return (
        <div className='text-center card background-c'>
            <h4><b>{question}</b></h4>
            <div className='d-flex mx-5 text-center '>{options.map(option => <p onClick={() => { if (option !== correctAnswer) { alert('wrong answer') } }} className='mx-5 border border-success p-2 mb-2'>{option}</p>)}</div>
         {<p onClick={()=>b(correctAnswer)}>a</p>}
        <p>{rel}</p>
         
        </div>
    );
};

export default Questions;