import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../pages/search/Search';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <Link to='/' className='brand'>
                    <h1>RECIPE FOODS</h1>
                </Link>
                <Link to='/create'>
                    Create Recipe
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;