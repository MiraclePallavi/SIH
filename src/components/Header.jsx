import React from 'react';
import logo from '../assets/logo2.png'
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className='company'>
        <img src={logo} alt="Hospital Logo" className="h-12" />
        <div className="font-family:Cambria">CareGuardian</div>
        </div>
        <nav className="ml-8">
  <ul className="flex space-x-8">
    <li>
      <a
        href="/dashboard"
        className="text-2xl font-semibold text-white-800 hover:text-blue-600 transition duration-300 ease-in-out"
      >
        Dashboard
      </a>
    </li>
    <li>
      <a
        href="/opd"
        className="text-2xl font-semibold text-white-800 hover:text-blue-600 transition duration-300 ease-in-out"
      >
        OPD
      </a>
    </li>
    <li>
      <a
        href="/bed-management"
        className="text-2xl font-semibold text-white-800 hover:text-blue-600 transition duration-300 ease-in-out"
      >
        Beds
      </a>
    </li>
    <li>
      <a
        href="/inventory"
        className="text-2xl font-semibold text-white-800 hover:text-blue-600 transition duration-300 ease-in-out"
      >
        Inventory
      </a>
    </li>
    <li>
      <a
        href="/support"
        className="text-2xl font-semibold text-white-800 hover:text-blue-600 transition duration-300 ease-in-out"
      >
        Support
      </a>
    </li>
  </ul>
</nav>

      </div>
      <div className="flex items-center">
        <span className="mr-4">Admin Name</span>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-full border border-white hover:bg-blue-700 transition duration-300 ease-in-out text-3xl">
  P
</button>
        <button className="ml-2 bg-red-500 px-4 py-2 rounded">Logout</button>
      </div>
    </header>
  );
}

export default Header;
