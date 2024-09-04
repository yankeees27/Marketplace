import React, { useState} from 'react';
import '../style/css/login-pgae.css';
import logins from './login-database.json';


export function LoginPage() {
    // function to show/hide the password onclick 
    function showPassword(){ 
        const password = document.querySelector('#password');
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }
    // function to show/hide the password onclick 

        const [ username, setUsername] = useState('');
        const [ password, setPassword] = useState('');
        const [ users ] = useState(logins);

        const handleLogin = () => {
            const foundUser = users.find(user => user.username === username && user.password === password);
            if ( foundUser ) {
                console.log('Login successful!');
            } else {
                console.log('Invalid username or password')
            }
        }

    return(
        <div className='login-page'>
            <h1>Login</h1>
            <form>

                <div className='login-page-inputs'>
                    <input className='login-page-input' type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                    <input className='login-page-input' id='password' type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}  />
                        <div className='login-page-input-row'>
                            <input onClick={showPassword} type="checkbox" placeholder='' />
                            <p>Show password</p>
                            <a href='#'>Forgot password?</a>
                        </div>
                </div>
            </form>
            <button onClick={handleLogin}>Login</button>
            <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
    )

};

//functions i want to code: 
// 1. a button to show/hide the password DONE
// 2. create a little database, and try to sign in with the credentials in the database DONE
// 3. if data is wrong -> error DONE
// 4. password has to have big Letters and a special characters 
// 5. if correct data -> route to an extra page where it says, you logged in successfully  DONE

// check about routing in react -> route to sign up page where you can create an account, and user input is going into the database

//! solution for browser router is to set up babel loader.


// make all paths local