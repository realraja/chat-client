// src/LoginForm.js

import React from 'react';
// import AnimatedBackground1 from '../components/backgrounds/AnimatedBackground1';
import AnimatedVanta from '../components/backgrounds/AnimatedVanta';

const Login = () => {
  return (<div className='text-white'>
    <AnimatedVanta />
  {/* <AnimatedBackground1 /> */}
     <div className="flex items-center justify-center h-screen" >
      <form className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg text-center text-white">
        <h2 className="text-3xl mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-left mb-2" htmlFor="username">Username</label>
          <input
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-left mb-2" htmlFor="password">Password</label>
          <input
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
