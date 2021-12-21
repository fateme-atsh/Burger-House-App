import React from 'react';
import Logo from '../../img/logo.png';
import DeliveryImg from '../../img/delivery.png';
import ShoppingBasket from '../../icons/Shopping-basket';
import { Link } from 'react-router-dom';

const Navbar = () => { 
    return (
        <nav className='bg-navbar-poster bg-no-repeat bg-cover text-brown flex pb-5 sm:pb-16'>
            <div className="logo sm:w-1/4 flex items-center">
                <a href="#">
                    <img src={Logo} alt="Burger-House"/>
                </a>
                <div className="flex items-center bg-brown text-yellow rounded-lg p-3 sm:hidden">
                <ShoppingBasket className=""/><span id="shopping-basket" className="text-xl mx-2">0</span>
                </div>
            </div>

            <div className="toolbar static sm:w-3/4">
                <div className="delivery text-brown absolute top-5 right-5 flex sm:w-3/4 sm:top-0 sm:-right-10">
                    <img src={DeliveryImg} alt="" class="w-16 sm:w-9"/>
                    <span className="font-bold flex items-center sm:text-xs">Express Delivery +1 234 567 890</span>
                </div>
                <div className="links font-bold text-brown text-sm absolute top-20 right-3 sm:top-10 sm:text-xs">
                    <ul className="flex">
                        <li className="hover:bg-brown-light p-4 rounded-md"><Link to="/home">HOME</Link></li>
                        <li className="dropdown hover:bg-brown-light p-4 rounded-md"><Link to="/menu">MENU</Link>
                            <ul className="sub-menu hidden">
                                <li className="hover:bg-brown-light p-4 rounded-md"><a href="#">MENU1</a></li>
                                <li className="hover:bg-brown-light p-4 rounded-md"><a href="#">MENU2</a></li>
                                <li className="hover:bg-brown-light p-4 rounded-md"><a href="#">MENU3</a></li>
                            </ul>
                        </li>
                        <li className="hover:bg-brown-light p-4 rounded-md"><Link to="/story">OUR STORY</Link></li>
                        <li className="hover:bg-brown-light p-4 rounded-md"><Link to="/contact">CONTACT US</Link></li>
                    </ul>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;