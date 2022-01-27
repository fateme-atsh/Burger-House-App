import React, { useEffect, useState } from 'react';
import DeliveryImg from '../../../img/delivery.png';
import { Link } from 'react-router-dom';
import BeforeLogin from './BeforeLogin';
import AfterLogin from './AfterLogin';
import Logo from '../../../img/logo.png';

const Navbar = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        let LocalData = localStorage.getItem('user-info');
        setUser(JSON.parse(LocalData));
        console.log(user);
    },[]);

    return (
        <nav className='bg-navbar-poster bg-no-repeat bg-cover text-brown flex pb-5 sm:pb-16 h-full'>
            <div className="logo sm:w-2/5 flex items-center my-5">
                <Link to="/" className='sm:hidden md:w-2/4 w-3/4'>
                    <img src={Logo} alt="Burger-House" />
                </Link>
                <div className="links my-2 font-bold text-brown text-xl absolute top-20 right-3 sm:top-10 sm:text-xs md:text-base">
                    <ul className="flex">
                        <li className="hover:bg-brown-light p-4 rounded-md"><Link to="/home">خانه</Link></li>
                        <li className="dropdown hover:bg-brown-light p-4 rounded-md"><Link to="/menu">منو</Link>
                            <ul className="sub-menu hidden">
                                <li className="hover:bg-brown-light p-4 rounded-md"><a href="#">منو1</a></li>
                                <li className="hover:bg-brown-light p-4 rounded-md"><a href="#">منو2</a></li>
                                <li className="hover:bg-brown-light p-4 rounded-md"><a href="#">منو3</a></li>
                            </ul>
                        </li>
                        <li className="hover:bg-brown-light p-4 rounded-md"><Link to="/story">درباره ی ما</Link></li>
                        <li className="hover:bg-brown-light p-4 rounded-md"><Link to="/contact">رزرو میز</Link></li>
                    </ul>
                </div>
            </div>

            <div className="static sm:w-2/5">
                <div className="delivery text-brown absolute top-10 left-5 flex sm:w-3/4 sm:top-2.5 sm:-left-14">
                    { user !== [] ?
                        <BeforeLogin className="sm:w-1/5 md:text-md" />
                        : <AfterLogin className="sm:w-1/5 md:text-md" />
                    }
                </div>
            </div>

        </nav>
    );
}

export default Navbar;