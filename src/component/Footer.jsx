// Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">JobTracker</h2>
          <p className="text-sm text-gray-400">Helping you stay on top of your career.</p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-sm hover:underline">Privacy Policy</a>
          <a href="#" className="text-sm hover:underline">Terms of Use</a>
          <a href="#" className="text-sm hover:underline">Contact</a>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-4">
        © {new Date().getFullYear()} Md Perwez. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
