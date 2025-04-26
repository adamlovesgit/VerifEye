import React from 'react';

function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-500 text-black py-2 rounded-md font-semibold hover:bg-yellow-400"
      >
        Log In
      </button>
    </form>
  );
}

export default LoginForm;

