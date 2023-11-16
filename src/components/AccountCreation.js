import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUser } from '../services/api';

const AccountCreation = () => {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    const newUser = await createUser(data);
    console.log(newUser);
    reset(); // reset form fields
    setMessage('Account details updated'); // display message
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center space-y-4 p-4">
        <input {...register('username')} placeholder="Username" className="p-2 border rounded" />
        <input {...register('password')} placeholder="Password" className="p-2 border rounded" />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Create Account</button>
        {message && <p>{message}</p>} {/* display message if it exists */}
      </form>
      
    </div>
  );
};

export default AccountCreation;