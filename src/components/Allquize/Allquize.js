import React from 'react';
import Questions from '../Questions/Questions';

const Allquize = ({quizeall}) => {
    const {questions}=quizeall
   
    return (
        <div className='text-center'>
            
            
            {questions.map(questiondetail=><Questions questiondetail={questiondetail}
            key={questiondetail.id}> </Questions>)}
           
        </div>
    );
};

export default Allquize;