import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';




const Login = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { signIn, loginProvider } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();

    // to use title
    useTitle('Login')
    // email
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)
                //  JWT token 
                fetch('https://white-smile-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        //to store JWT token in Local Storage 
                        localStorage.setItem('token', data.token);
                        // form.reset()
                        // setError('')
                        navigate(from, { replace: true })
                    })




            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }



    // sign in with google
    const handleGoogleSigIn = () => {
        loginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
                setError('')
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center  lg:text-left">
                    <h1 className="text-5xl font-bold">Stay With US!</h1>
                    <p className="py-6">We Will Provide you health tips and technique to keep your teeth healthy</p>
                </div>
                <div className="card flex-shrink-0 w-1/2  shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <p className='text-red-600 mb-4'>{error?.slice(10,)}</p>
                            <button className="btn btn-info">Login</button>
                        </div>
                        <div className='text-center'>
                            <p>New to White Smile <Link to='/register' className='text-blue-400'>Register</Link> </p>
                            <hr />
                            OR
                            <p className='text-xl font-mono'>Log In Using</p>
                            <div className='flex justify-center mt-2'>
                                <FaGoogle onClick={handleGoogleSigIn} className='text-4xl'></FaGoogle>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;