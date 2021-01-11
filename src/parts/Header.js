import React from 'react';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { Link, withRouter } from 'react-router-dom';
import propTypes from 'prop-types';

function Header({ onLight, location }) {
  const linkColor = onLight ? 'text-gray-900' : 'text-white';
  const linkCTA =
    location.pathname.indexOf('/login') > -1
      ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;
  const textCTA = location.pathname.indexOf('/login') > -1 ? 'Daftar' : 'Masuk';

  return (
    <header className="flex justify-between items-center">
      <div style={{ height: 54 }}>
        <Logo className={onLight ? 'on-light' : 'on-dark'}></Logo>
      </div>
      <ul className="flex">
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                'text-white hover:text-teal-500 text-lg px-6 py-3',
              ].join(' ')}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                'text-white hover:text-teal-500 text-lg px-6 py-3',
              ].join(' ')}
            >
              Pricing
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                'text-white hover:text-teal-500 text-lg px-6 py-3',
              ].join(' ')}
            >
              Features
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                'text-white hover:text-teal-500 text-lg px-6 py-3',
              ].join(' ')}
            >
              Story
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              target="_blank"
              rel="noopener noereferrer"
              link={linkCTA}
              className="bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 ml-6"
            >
              {textCTA}
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  onLight: propTypes.bool,
};

export default withRouter(Header);
