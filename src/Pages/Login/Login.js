import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const {login} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();



    const handleLogin = (data) => {
        login(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='h-[700px] flex justify-center'>
            <div>
                <h2 className='text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full input  input-bordered"
                            {...register("email", { required: true })}
                            
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="input  input-bordered"
                            {...register("password", { required: true })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    
                    <button className='btn btn-primary' type='submit'>Login</button>
                </form>
                <p>Don't have an account? Please <Link className='link' to='/register'>Register.</Link></p>
            </div>
        </div>
    );
};

export default Login;