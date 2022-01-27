import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../../icons/User';


const BeforeLogin = () => {
    return (
        <>
            <Link to="/login" className="flex text-xl hover:bg-brown-light p-4 rounded-md sm:text-xs">
                <User/><span className='px-2'>ورود / ثبت نام</span>
            </Link>
        </>
    );
}

export default BeforeLogin;