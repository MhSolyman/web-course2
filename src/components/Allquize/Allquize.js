import React from 'react';
import Questions from '../Questions/Questions';

const Allquize = ({quizeall}) => {
    const {questions}=quizeall
   
    return (
        <div>
            
            
            {questions.map(questiondetail=><Questions questiondetail={questiondetail}
            key={questiondetail.id}> a</Questions>)}
           
        </div>
    );
};

export default Allquize;