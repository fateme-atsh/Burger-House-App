import React from 'react';
import User from '../../icons/User';
import Lock from '../../icons/Lock';

const WelcomeBack = () => {
    return (
        <form className='bg-white p-10 rounded-b-md'>
            <h2 className='text-center text-lg font-bold mb-3'>خوش آمدید.</h2>

            <div className='flex items-center gap-x-3'>
                <User />
                <input type="text" placeholder='نام کاربری' className='my-3 w-full border border-gray rounded-md' required />
            </div>

            <div className='flex items-center gap-x-3'>
                <Lock />
                <input type="password" placeholder='رمز عبور' className='my-3 w-full border border-gray rounded-md' required />
            </div>

            <div className='flex justify-center mt-5'>
                <input type='submit' value="ورود" className='bg-yellow text-brown text-lg font-semibold rounded-lg px-6 py-3 cursor-pointer hover:bg-brown hover:text-yellow' />
            </div>

        </form>
    );
}

export default WelcomeBack;