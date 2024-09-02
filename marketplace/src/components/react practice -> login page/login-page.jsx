import React from 'react';
import '../style/css/login-pgae.css';

export function LoginPage() {
    function showPassword(){ // function to show/hide the password onclick 
        const password = document.querySelector('#password');
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }
    return(
        <div className='login-page'>
            <h1>Login</h1>
            <form>

                <div className='login-page-inputs'>
                    <input className='login-page-input' type="text" placeholder='Username' />
                    <input className='login-page-input' id='password' type="password" placeholder='Password'  />
                        <div className='login-page-input-row'>
                            <input onClick={showPassword} type="checkbox" placeholder='' />
                            <p>Remember me</p>
                            <a href='#'>Forgot password?</a>
                        </div>
                </div>
                <button>Login</button>
                <p>Don't have an account? <a href="#">Sign up</a></p>
            </form>
        </div>
    )

};

//functions i want to code: 
// 1. a button to show/hide the password
// 2. create a little database, and try to sign in with the credentials in the database
// 3. if data is wrong -> error 
// 4. password has to have big Letters and a special characters 
// 5. if correct data -> route to an extra page where it says, you logged in successfully                                                       