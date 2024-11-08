import React, { useState } from 'react';
import { login as loginApi } from '../services/api';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginApi(username, password);
      login(response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="w-80 bg-white p-10 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-semibold mb-6">Instagram</h1>
        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-3 border border-gray-300 rounded text-sm focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-1.5 rounded font-semibold text-sm"
          >
            Log In
          </button>
        </form>
        <div className="text-sm text-gray-500 my-4">OR</div>
        <div className="text-blue-800 text-sm font-semibold">Forgot password?</div>
      </div>
      <div className="w-80 mt-4 bg-white p-4 rounded-lg shadow-md text-center">
        <span className="text-sm">Don't have an account?</span>
        <Link to="/signup" className="text-blue-500 text-sm font-semibold ml-1">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Login;
