import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-6">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Log in to your account' : 'Sign up to your account'}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {isLogin
              ? 'Welcome back! Please enter your details'
              : 'Welcome back! Please enter your details'}
          </p>
        </div>

        {isLogin ? <LoginForm /> : <SignupForm />}

        <div className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-500 font-semibold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
