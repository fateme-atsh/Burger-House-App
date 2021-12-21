import React from 'react';

const Header = () => { 
    return (
        <header className='bg-header-poster bg-no-repeat bg-cover'>
            <div className="headline text-brown py-56 px-5 sm:py-40">
                <span className="px-2 py-3 border-2 border-dashed font-bold sm:p-1 sm:text-xs">IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</span><br/>
                <div className="relative">
                <span className="text-8xl font-black sm:text-6xl text-shadow">BURGER</span><br/>
                <span className="text-6xl font-black absolute top-24 text-shadow sm:text-5xl sm:top-16">WEEK</span>
                </div>
            </div>
        </header>
    );
}

export default Header;