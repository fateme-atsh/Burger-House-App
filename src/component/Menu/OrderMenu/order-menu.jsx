import React from 'react';
import Burger1 from '../../../img/burger1.png';
import Burger2 from '../../../img/burger2.png';

const OrderMenu = () => {
    return(
        <section className="order-menu grid grid-cols-3 gap-x-4 sm:grid-cols-1  ">
            <div className="sm:py-8 shadow-sm">
                <div >
                    <img src={Burger1} className="mx-auto block w-3/4" alt=''/>
                    <div className="px-3 py-4 text-brown text-center">
                        <h3 className="font-bold text-2xl">LOREM IPSUM DOLOR</h3>
                        <p className="py-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, officia.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick="" className="bg-red text-white py-3 px-4 hover:bg-red-dark">ORDER NOW</button>
                    </div>
                </div>
            </div>
            <div className="sm:py-8 shadow-sm">
                <div>
                    <img src={Burger2} className="mx-auto block w-3/4" alt=''/>
                    <div className="px-3 py-4 text-brown text-center">
                        <h3 className="font-bold text-2xl">LOREM IPSUM DOLOR</h3>
                        <p className="py-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, officia.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick="" className="bg-red text-white py-3 px-4 hover:bg-red-dark">ORDER NOW</button>
                    </div>
                </div>
            </div>
            <div className="sm:py-8 shadow-sm">
                <div>
                    <img src={Burger1} className="mx-auto block w-3/4" alt=''/>
                    <div className="px-3 py-4 text-brown text-center">
                        <h3 className="font-bold text-2xl">LOREM IPSUM DOLOR</h3>
                        <p className="py-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, officia.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick="" className="bg-red text-white py-3 px-4 hover:bg-red-dark">ORDER NOW</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OrderMenu;