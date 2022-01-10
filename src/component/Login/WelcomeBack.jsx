import React from 'react';
import User from '../../icons/User';
import Lock from '../../icons/Lock';

const WelcomeBack = () => {
    return ( 
        <form className='bg-white p-10'>
            <h2 className='text-center text-lg font-bold mb-3'>Welcome Back</h2>

            <div className='flex items-center gap-x-3'>
                <User/>
            <input type="text" placeholder='user Name' className='my-3' />
            </div>

            <div className='flex items-center gap-x-3'>
                <Lock />
                <input type="password" placeholder='Password' className='my-3' />
            </div>

            <div className='flex justify-center mt-5'>
                <input type='submit' value="Login" className='bg-yellow text-brown text-lg font-semibold rounded-lg px-6 py-3 hover:bg-brown hover:text-yellow' />
            </div>

        </form>
     );
}
 
export default WelcomeBack;