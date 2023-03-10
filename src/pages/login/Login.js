import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../hooks/title/UseTitle';
import useToken from '../../hooks/UseToken';

const Login = () => {
    useTitle('Login')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const { providerLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                navigate('/')

            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login Successful')
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));


    }


    return (
        <div className='h[800px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-2xl text-center'> Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs"
                            {...register("email",
                                { required: 'Email is required !!' }

                            )} />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password",
                                { required: "Password is required !!" }
                            )}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}

                    </div>

                    <input className='btn btn-accent w-full mt-6' value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-6'>New to PhoneMax portal <Link className='text-primary' to='/signup'> Create a new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>


        </div>
    );
};

export default Login;