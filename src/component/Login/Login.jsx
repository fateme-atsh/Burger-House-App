import React, { useState } from 'react';
import WelcomeBack from './WelcomeBack';
import SignUp from './SignUp';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const handleClick = (event,props) => {
        event.preventDefault();
        if(props==='login'){ setNewUser(true);
        }else{setNewUser(false);}
    }

    return (
        <section className='bg-brown-light m-5 py-5'>
            <div className='w-3/6 h-1/4 bg-white mx-auto'>
                <div className='grid grid-cols-2'>
                    <button className='bg-light-gray hover:bg-yellow focus:bg-white py-5' onClick={(event)=>handleClick(event,'login')}>Login</button>
                    <button className='bg-light-gray hover:bg-yellow focus:bg-white'onClick={handleClick}>Sign Up</button>
                </div>
                <div>
                    {newUser === true ? 
                    <WelcomeBack /> : 
                    <SignUp />}
                </div>
            </div>

        </section>
    );
}

export default Login;