import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allquize from '../Allquize/Allquize';

const Quize = () => {
    const quiz= useLoaderData();
    const quizeall= quiz.data;
    
    return (
        <div>
            <h2 className='text-center'> Quize of {quiz.data.name}</h2>
<Allquize quizeall={quizeall}>

</Allquize>
            
        </div>
    );
};

export default Quize;