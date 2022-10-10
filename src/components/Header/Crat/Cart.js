import React from 'react';
import './Crad.css'

const Cart = ({ quiz }) => {
    const { logo, name } = quiz
    return (
        <div className='container'>
                
                    <h4>{name}</h4>
                    <img className='img' src={logo} alt=""></img>
                
        </div>
    );
};

export default Cart;