import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Mail from '../../icons/Email';
import Lock from '../../icons/Lock';
import Phone from '../../icons/Phone';
import User from '../../icons/User';

const SignUp = () => {
    const [newUser, setNewUser] = useState();
    const [changeField, setChangeField] = useState({
        name: "",
        lastName: "",
        phone: "",
        userName: "",
        email: "",
        pass: ""
    })
    const history = useNavigate();

    // function called when form value change
    const handleformchange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...changeField };
        newFormData[fieldName] = fieldValue;

        setChangeField(newFormData);
        console.log(changeField)
    }

    // function for submit SignUp form
    const handleSignUp = (event) => {
        event.preventDefault();
        setNewUser(changeField);

        const sent = async () => {
            let post = await axios.post('https://test2api.free.beeceptor.com/favicon.ico',
                JSON.stringify(newUser))
                .then((res) => {
                    console.log(res);
                    localStorage.setItem('user-info', JSON.stringify(res));
                })
        }
        sent();
        history('/contact');
    }

    return (
        <form className='bg-white p-10 sm:w-full sm:text-md rounded-b-md'
            onSubmit={handleSignUp}>
            <h2 className='text-center text-lg font-bold mb-3'>ایجاد حساب کاربری</h2>
            <div className='flex items-center gap-x-3'>
                <User />
                <input type="text" placeholder='نام' name='name' className='my-3 w-1/2 sm:w-11/12 border border-gray rounded-md' required
                    onChange={handleformchange} />
                <input type="text" placeholder='نام خانوادگی' name='lastName' className='my-3 w-1/2 sm:w-11/12 border border-gray rounded-md' required
                    onChange={handleformchange} />
            </div>
            <div className='flex items-center gap-x-3'>
                <Phone />
                <input type="number" placeholder='شماره موبایل' name='phone' className='my-3 w-full sm:w-11/12 border border-gray rounded-md' required
                    onChange={handleformchange} />
            </div>
            <div className='flex items-center gap-x-3'>
                <User />
                <input type="text" placeholder='نام کاربری' name='userName' className='my-3 w-full sm:w-11/12 border border-gray rounded-md' required
                    onChange={handleformchange} />
            </div>

            <div className='flex items-center gap-x-3'>
                <Mail />
                <input type="email" placeholder='ایمیل' name='email' className='my-3 w-full sm:w-11/12 border border-gray rounded-md' required
                    onChange={handleformchange} />
            </div>

            <div className='flex items-center gap-x-3'>
                <Lock />
                <input type="password" placeholder='رمز عبور' name='pass' className='my-3 w-full sm:w-11/12 border border-gray rounded-md' required
                    onChange={handleformchange} />
            </div>

            <div className='flex items-center gap-x-3 text-sm'>
                <input type="checkbox" className='my-3' required />
                <label> تمامی<a href='#' className='text-blue'> قوانین </a> سایت را می پذیرم. </label>
            </div>

            <div className='flex justify-center mt-5'>
                <input type='submit' value="ثبت نام" className='bg-yellow text-brown text-lg font-semibold rounded-lg px-6 py-3 cursor-pointer	 hover:bg-brown hover:text-yellow' />
            </div>
        </form>
    );
}

export default SignUp;