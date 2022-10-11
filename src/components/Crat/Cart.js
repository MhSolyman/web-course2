import React from 'react';
import { Link } from 'react-router-dom';
import './Crad.css'

const Cart = ({ quiz }) => {
    const {id, logo, name,total } = quiz
    return (
        <div className='container '>
            <div className='card'>
                <img className='img-fluid img' src={logo} alt=""></img>
                <div className='d-flex align-items-center justify-content-between mt-1 ' >
                <p><b>{name}</b></p>
                <p>Total question: {total}</p>
              <Link to={`/quize/${id}`}><button  type="button" class="btn btn-primary " >Start Practice</button></Link>  
                </div>
                
            </div>


        </div>
    );
};

export default Cart;