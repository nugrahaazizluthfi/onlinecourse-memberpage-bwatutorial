import React from 'react';
import { Link } from 'react-router-dom';

export default function ServerError() {
  return (
    <section className="h-screen flex flex-col items-center">
      <img
        style={{ height: '50%' }}
        src={`${process.env.PUBLIC_URL}/assets/images/illustration-notfound.jpg`}
        alt="Oops! Server Error"
      />
      <h1 className="text-3xl text-gray-900 mt-12">Oops! Server Error.</h1>
      <p className="text-lg text-gray-600 mt-4 mb-8 lg:w-3/12 xl:w-3/12 mx-auto text-center">
        Mostly this cause by the server was busy, please try later.
      </p>
      <Link
        to={'/'}
        className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5"
      >
        {'Back To Home'}
      </Link>
    </section>
  );
}
