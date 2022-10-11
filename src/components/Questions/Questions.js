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
            <h4><b className='text-primary'>{question}</b></h4>
            <div className='text-center text-primary'>{options.map(option => <p onClick={() => { if (option !== correctAnswer) { alert('wrong answer') } }} className='mx-5 border-one p-2 mb-2'>{option}</p>)}</div>
         {<p onClick={()=>b(correctAnswer)}> <b className='text-primary'>Click on this icon and find out the correct answer </b> <i class="fa-solid fa-eye text-primary"></i></p>}

        
         
        <p className='text-primary'>The correct answer is: <b >{rel}</b></p>
         
        </div>
    );
};

export default Questions;