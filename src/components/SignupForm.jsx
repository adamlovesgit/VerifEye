import React from 'react';

function SignupForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
        />
      </div>
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
          placeholder="Create a password"
          className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-500 text-black py-2 rounded-md font-semibold hover:bg-yellow-400"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;

