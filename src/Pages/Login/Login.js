import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
    const {login, loginWithGoogle} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();



    const handleLogin = (data) => {
        login(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user)
            reset()
        })
        .catch(error => console.error(error))
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(result => {
            const user = result.user;
            const role = "buyer";
            saveUserInDB(user.displayName, user.email, role)
            console.log(user);
        })
        .catch(err => console.error(err))
    }

    const saveUserInDB  = (name, email, role) => {
        const user ={name, email, role};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div className='h-[700px] mt-20 flex justify-center'>
            <div>
                <h2 className='text-3xl text-accent font-bold text-center'>Login</h2>
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
                    
                    <button className='btn btn-primary my-3' type='submit'>Login</button>
                </form>
                <p>Don't have an account? Please <Link className='link' to='/register'>Register.</Link></p>
                <div className='my-4 text-center'>
                    <button onClick={handleGoogleLogin} className='btn btn-outline btn-accent px-10'><FaGoogle className='mr-2 text-2xl'></FaGoogle>Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;