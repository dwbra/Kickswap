import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/Auth';
import { GoogleLogin } from 'react-google-login';

import { AUTH } from '../../constants/ActionTypes';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmedPassword: ''}

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }

    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const googleSuccess = async (res) => {
        // console.log(res);
        //optional chaining operator ?. 
        //means that it won't throw an error if the object doesnt return any data from the property
        const result = res?.profileObj;
        const token = res?.tokenId;

        // console.log(result);
        // console.log(token);

        try {
            dispatch({ type: AUTH, data: { result, token }});

            // console.log({data: result});
            // console.log({data: token});

            history.push('/');
            console.log('Google sign in successful!');
            alert("You have signed in!");
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log('Google sign in was unsuccessful. Try again later. ')
    };

    return (
        <div id="kickswap-authform">
        <h3>{isSignup ? 'Sign Up' : 'Sign In'}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    {
                        isSignup && (
                            <>
                            <Input name='firstName' placeholder="First Name" label='First Name' handleChange={handleChange} autoFocus half/>
                            <Input name='lastName' placeholder="Last Name" label='Last Name' handleChange={handleChange} half />
                            </>
                        )
                    }
                    <Input name='email' placeholder="Email"label='Email Address' handleChange={handleChange} type='email'/>
                    <Input name='password' placeholder="Password"label='Password' handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                    {isSignup && <Input name='confirmPassword' placeholder="Confirm Password"label='Repeat Password' handleChange={handleChange} type='password' />}
                </div>
                <button type='submit' fullWidth variant='contained' color='primary'>
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </button>
                <GoogleLogin
                    clientId="627818525303-voeqvkflunof7qpd435e4del1pdi5u2b.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <button id="kickswap-googleloginbutton" 
                        fullWidth 
                        onClick={renderProps.onClick} 
                        disabled={renderProps.disabled} 
                    >
                           Google Sign In
                    </button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                />
                <div container justify="flex-end">
                        <button id="kickswap-createaccountbutton" onClick={switchMode}>
                            {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up!"}
                        </button>
                </div>
            </form>
            </div>
    )
};

export default Auth;