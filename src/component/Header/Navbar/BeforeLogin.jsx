import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../../icons/user';


const BeforeLogin = () => {
    return (
        <>
            <Link to="/login" target="-blank" className="flex text-xl hover:bg-brown-light p-4 rounded-md">
                <User/><span className='px-2'>Login/Sign Up</span>
            </Link>
        </>
    );
}

export default BeforeLogin;