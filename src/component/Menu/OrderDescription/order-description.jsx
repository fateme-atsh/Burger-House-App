import React from 'react';
 
const OrderDescription =() =>{
    return(
        <section className="order-title ">
            <div className="flex justify-center items-center">
                <button className="bg-yellow text-brown hover:bg-brown hover:text-yellow p-4 font-bold tracking-tighter">ALWAYS TASTY BURGER</button>
            </div>
            <div className="order-description text-center p-6">
                <span className="text-brown font-black text-6xl sm:text-3xl">CHOOSE & ENJOY</span>
                <p className="py-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatum ipsa cum? Minima dolorem et, harum voluptatibus facere officiis est consequuntur, tempore quam quisquam enim porro ipsam voluptatem tempora fuga!
                </p>
            </div>
        </section>
    );
}

export default OrderDescription;