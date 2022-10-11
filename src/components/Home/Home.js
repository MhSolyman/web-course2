import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Cart from '../Crat/Cart';
import './Home.css'

const Home = () => {
    let data = useLoaderData();
    let quizs = data.data;



    return (
        <div className='conatiner margin'>
            <div className='header d-flex'><div className='img-one'><img className='img-two img-fluid"' src="img/one.jpg" alt="" ></img></div>
                
                <div className='text'>
                    <h1 className='font-size text-primary'>Let's <br />
                     start learning 
                     <br />
                      web-development</h1>
                </div>
            </div>
            <div className='d-flex bottom-cart'>
                {quizs.map(quiz => <Cart quiz={quiz}
                    key={quiz.id}></Cart>)}
            </div>



        </div>
    );
};

export default Home;