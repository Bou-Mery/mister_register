import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

function NavLinks() {
  return (
    <>
      <NavLink to="/home" className="px-2 py-1 text-white hover:bg-blue-500 rounded">Home</NavLink>
      <NavLink to="/login" className="px-2 py-1 text-white hover:bg-blue-500 rounded">Login</NavLink>
      <NavLink to="/register" className="px-2 py-1 text-white hover:bg-blue-500 rounded">Register</NavLink>
    </>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='flex w-1/3 justify-end'>
        {/* Desktop Navigation */}
        <div className='hidden md:flex space-x-4'>
          <NavLinks />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className='md:hidden'>
          <button onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center space-y-4 mt-4'>
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Nav;
