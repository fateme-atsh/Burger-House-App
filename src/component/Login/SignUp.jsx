import React from 'react';
import Mail from '../../icons/Email';
import Lock from '../../icons/Lock';
import User from '../../icons/User';

const SignUp = () => {
    return (
        <form className='bg-white p-10'>
            <h2 className='text-center text-lg font-bold mb-3'>Create an Acccount</h2>

            <div className='flex items-center gap-x-3'>
                <User/>
            <input type="text" placeholder='user Name' className='my-3' />
            </div>

            <div className='flex items-center gap-x-3'>
                <Mail />
                <input type="email" placeholder='Email' className='my-3' />
            </div>

            <div className='flex items-center gap-x-3'>
                <Lock />
                <input type="password" placeholder='Password' className='my-3' />
            </div>

            <div className='flex items-center gap-x-3 text-sm'>
                <input type="checkbox" className='my-3'/>
                <label>I agree to the <a href='#' className='text-blue'>terms and conditions.</a> </label>
            </div>

            <div className='flex justify-center mt-5'>
                <input type='submit' value="Sign Up" className='bg-yellow text-brown text-lg font-semibold rounded-lg px-6 py-3 hover:bg-brown hover:text-yellow' />
            </div>
        </form>
    );
}

export default SignUp;