
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logoImg from '../assets/rocksdalelogo.png';
import { Link } from 'react-router-dom'
import { hideAddress } from '../slices/navbar-expand';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);



  window.addEventListener('scroll', hideAddress);

  return (
    <nav className='w-screen z-10 bg-white fixed text-red-500 md:pt-5 '>
      <div>
        <h1 id="top-address" className='hidden md:block text-center text-sm text-zinc-400'>1234 Pilgrim Drive, Annapolis Maryland&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(123)-456-7890</h1>
      </div>
      <div id="logo" className='hidden md:flex md:justify-center'>
        <img id="logoimg" className='hidden md:flex md:justify-center' src={logoImg} alt="/" />
      </div>
      <div className='flex md:justify-center items-center w-full h-full pl-5'>
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-10' /> : <XIcon className='w-10' />}
        </div>
        {/* <img className='md:hidden flex w-[80px]' src={logoImg} alt="/" /> */}
        <h1 className=' flex items-center text-black text-3xl font-bold md:hidden'>RocksDale&nbsp;&nbsp;<span className='text-red-400'>Cafe</span></h1>
        <div className='flex items-center font-bold'>

          <ul className="hidden md:flex gap-10 p-5">
            <li className='hover:text-zinc-500 p-4'><Link to='/'>Home</Link></li>
            <li className='hover:text-zinc-500 p-4'><Link to='/Events'>Events</Link></li>
          </ul>

          <ul className="hidden md:flex gap-10 p-5">
            <li className='hover:text-zinc-500 p-4'><Link to='/Menu'>Menu</Link></li>
            <li className='hover:text-zinc-500 p-4'><Link to='/Shop'>Shop</Link></li>
            <li className='hover:text-zinc-500 p-4'>Login</li>
          </ul>
        </div>

      </div>

      <ul className={!nav ? 'hidden' : 'md:hidden absolute bg-white w-full px-8 text-red-900 font-bold py-2'}>
        <li className='border-b-2 border-zinc-300 w-full py-2'><Link to='/' onClick={handleClick}>Home</Link></li>
        <li className='border-b-2 border-zinc-300 w-full py-2'><Link to='/Events' onClick={handleClick}>Events</Link></li>
        <li className='border-b-2 border-zinc-300 w-full py-2'><Link to='/Menu' onClick={handleClick}>Menu</Link></li>
        <li className='border-b-2 border-zinc-300 w-full py-2'><Link to='/Shop' onClick={handleClick}>Shop</Link></li>
        <li className='py-2'>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;