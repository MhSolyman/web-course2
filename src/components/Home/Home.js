import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Header/Crat/Cart';
import './Home.css'

const Home = () => {
    let  data= useLoaderData();
   let quizs=data.data;
   console.log(data)
    
    return (
        <div className='conatiner margin'>
            <div className='d-flex'>
            {quizs.map(quiz=><Cart quiz={quiz}
            key={quiz.id}></Cart>)}
            </div>
            

            
        </div>
    );
};

export default Home;