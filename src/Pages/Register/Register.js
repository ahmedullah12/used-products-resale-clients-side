import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const {signUp} = useContext(AuthContext)
    const [role, setRole] = useState('buyer');



    const handleSignUp = data => {
        console.log(data)
        signUp(data.email, data.password)
        .then(result => {
            const user = result.user;
            saveUserInDB(user.name, user.email);
            toast('User Created Successfully....');
            reset();
        })
        .catch(error => {
            console.log(error);
        });
    }
    const saveUserInDB  = (name, email) => {
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
        <div className='h-[700px] flex justify-center'>
            <div>
                <h2 className='text-center'>Register</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full input  input-bordered"
                            {...register("name", { required: true })}
                            required
                        />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full input  input-bordered"
                            {...register("email", { required: true })}
                            required
                        />
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
                            required
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Which type of account you want to create?</span>
                        </label>
                        <select value={role} onChange={e => setRole(e.target.value)} className="select select-bordered" required>
                            <option value='buyer'>Buyer</option>
                            <option value='seller'>Seller</option>
                        </select>
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button className='btn btn-primary my-3' type='submit'>Register</button>
                </form>
                <p>Already have an account? Please <Link className='link' to='/login'>Login.</Link></p>
            </div>
        </div>
    );
};

export default Register;