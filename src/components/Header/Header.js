import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'


const Header = () => {
    return (
        <div className='container background' >
            




            <nav className='display-flex'>
                <div className='display-flex'>
                    <h2><b className='text-primary'>Web</b> Tutorial</h2>
                    <Link className='decoration' to='/'>Home</Link>
                </div>
                <div className='display-flex justify-content-end gape' >

                    <Link className='gape decoration' to='/statistics'>statistics</Link>
                    <Link className='gape decoration' to='/blog'>Blog</Link>
                    
                </div>
            </nav>
        </div>

    );
};

export default Header;