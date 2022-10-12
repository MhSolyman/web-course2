import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allquize from '../Allquize/Allquize';

const Quize = () => {
    const quiz= useLoaderData();
    const quizeall= quiz.data;
    
    
    return (
        <div>
            <h2 className='text-center text-primary'> <b> Quize of {quiz.data.name}</b></h2>
<Allquize quizeall={quizeall}
key={quizeall.id}>

</Allquize>
            
        </div>
    );
};

export default Quize;