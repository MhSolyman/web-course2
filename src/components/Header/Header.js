import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className='container background' >
            <nav className='display-flex'>
                <div className='display-flex'>
                    <h2><b className='text-primary'>Web</b> Tutorial</h2>
                    <Link to='/'>Home</Link>
                </div>
                <div className='justify-content-end' >

                    
                    <Link to='/about'>About</Link>
                </div>
            </nav>
        </div>

    );
};

export default Header;