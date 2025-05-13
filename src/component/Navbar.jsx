import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Md Perwez</h1>
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className="hidden sm:flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
        </ul>
      </div>
      {isOpen && (
        <ul className="sm:hidden mt-2 space-y-2">
          <li><a href="#" className="block hover:underline">Home</a></li>
          <li><a href="#" className="block hover:underline">Contact</a></li>
          <li><a href="#" className="block hover:underline">Blog</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
