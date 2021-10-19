import React from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../Hook/useAuth';


const Login = () => {
    const { loginWithGoogle, user } = useAuth();

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
                <button onClick={loginWithGoogle} type="submit">Login</button>
            </Form>
        </div>
    );
};

export default Login;