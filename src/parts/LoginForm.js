import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState(() => '');
  const [password, setPassword] = useState(() => '');

  function submit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center pb-24">
      <div className="w-3/12">
        <h1 className="text-4xl text-gray-400 mb-6">
          <span className="font-bold">Continue</span> Study, <br />
          Finish your <span className="font-bold">Goals</span>
        </h1>
        <form onSubmit={submit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg mb-2">
              Email Address
            </label>
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2"
              value={email}
              placeholder="Your email address"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2"
              value={password}
              placeholder="Your password"
            />
          </div>

          <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
            Daftar Now
          </button>
        </form>
      </div>
    </div>
  );
}
