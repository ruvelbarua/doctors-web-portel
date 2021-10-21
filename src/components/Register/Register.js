import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import initializeAuthentication from '../Firebase/Firebase.init';

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handelRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be enter minimum 6 charecters log.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.text(password)) {
            setError('Password Ensure string has two uppercase letters.')
            return;
        }
        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="container w-50 p-5 my-5 bg-light">
            <div className="bg-primary p-3 text-light text-center">
                <h2>Please {isLogin ? 'Login' : 'Registration'}</h2>
            </div>
            <Form onSubmit={handelRegistration}>
                <Form.Group className="mb-3 text-dark" controlId="formBasicEmail">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                    <Form.Text className="text-muted">
                        Please Enter Your Full Name
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 text-dark" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={toggleLogin} type="checkbox" label="Already Registered" />
                </Form.Group>
                <Button onClick={handleGoogleSignIn} variant="primary" size="lg">
                    {isLogin ? 'Login' : 'Register'}
                </Button>
                <div className="text-danger">{error}</div>
            </Form>
        </div>
    );
};

export default Register;