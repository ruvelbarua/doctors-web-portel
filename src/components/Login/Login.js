import React from 'react';
import { Form } from 'react-bootstrap';
import useFirebase from '../Hook/useFirebase'



const Login = () => {
    const { loginWinGoogle, user } = useFirebase();

    return (
        <div className="App">
            <Form action="">
                <h2>You are success:{user}</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" />
                </div>
                <button onClick={loginWinGoogle} type="submit">Login</button>
            </Form>
        </div>
    );
};

export default Login;