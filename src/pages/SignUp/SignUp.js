import React from 'react';
import { Link } from 'react-router-dom';
import graphic2 from '../../assects/login/graphic2.svg'

const SignUp = () => {
    return (
        <div className=' grid grid-cols-2'>
            <div>
                <img src={graphic2} alt="" />
            </div>
            <div className='h[800px] w-96 p-8'>
                <h2 className='text-2xl text-center'>Sign Up</h2>
                <form>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs"
                        />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs"
                        />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"

                            className="input input-bordered w-full max-w-xs" />

                        <label className="label"><span className="label-text"></span></label>
                    </div>
                    <input className='btn btn-accent w-full' value='Sign Up' type="submit" />
                    <div>

                    </div>
                </form>
            </div>


        </div>
    );
};

export default SignUp;