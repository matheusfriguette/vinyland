import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto px-2 py-4">
        <div className="flex">
          <Link href="/">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-green-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M14 12c0 1.103-.896 2-2 2-1.103 0-2-.897-2-2s.897-2 2-2c1.104 0 2 .897 2 2zm10 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.205 19.507a8.025 8.025 0 01-4.699-4.714l-1.02.127a9.015 9.015 0 005.592 5.606l.127-1.019zm.26-2.077a6.03 6.03 0 01-2.895-2.896l-1.041.13a7.016 7.016 0 003.807 3.807l.129-1.041zM16 12a4 4 0 10-8 0 4 4 0 008 0zm2.473-2.665a7.026 7.026 0 00-3.807-3.807l-.131 1.041a6.036 6.036 0 012.896 2.896l1.042-.13zm2.027-.253a9.01 9.01 0 00-5.582-5.568l-.129 1.019A8.027 8.027 0 0119.48 9.21l1.02-.128z" />
              </svg>
              <h1 className="font-semibold text-lg uppercase ml-4">Vinyland</h1>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
