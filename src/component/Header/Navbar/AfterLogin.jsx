import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingBasket from '../../../icons/Shopping-basket';
import User from '../../../icons/user';


const AfterLogin = () => {
    return (
        <>
            <Link to="/user-panel" target="-blank" className="flex text-xl hover:bg-brown-light p-4 rounded-md">
                <User /><span className='px-2'></span>
            </Link>
            <Link to="shopping-basket" className="flex items-center hover:bg-brown-light p-4 rounded-md sm:hidden">
                <ShoppingBasket className="" />
                <span id="shopping-basket" className="text-xl mx-2"></span>
            </Link>
        </>
    );
}

export default AfterLogin;