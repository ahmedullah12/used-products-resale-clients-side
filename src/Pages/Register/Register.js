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
            saveUserInDB(user.name, user.email)
            toast('User Created Successfully....');
            reset()
        })
        .catch(error => {
            console.log(error)
        });
    }
    
    const saveUserInDB  = (name, email) => {
        const user ={name, email, role};
        console.log(user);
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
        <div>
            
        </div>
    );
};

export default Register;