import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import './questions.css'

const Questions = ({ questiondetail }) => {
    const {question, options, correctAnswer} = questiondetail;
   
    
   const [rel, setReal] = useState()
    const b=(correctAnswer)=>{
    setReal(correctAnswer)
    }
    const notify = () => toast("You have typed the wrong answer");
    const notifyTwo=()=>toast(" Correct answer");



    return (
        <div className='text-center card background-c'>
            <h4><b className='text-primary'>{question}</b></h4>
            <div className='text-center text-primary'>{options.map(option => <p onClick={() => { if (option !== correctAnswer) { notify() }else{notifyTwo()} }} className='mx-5 border-one p-2 mb-2'>{option}</p>)}</div>
            <ToastContainer />
         {<p onClick={()=>b(correctAnswer)}> <b className='text-primary'>Click on this icon and find out the correct answer </b> <i className="fa-solid fa-eye text-primary"></i></p>}

        
         
        <p className='text-primary'>The correct answer is: <b >{rel}</b></p>
         
        </div>
    );
};

export default Questions;