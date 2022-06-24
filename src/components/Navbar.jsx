
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logoImg from '../assets/rocksdalelogo.png';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className='w-screen h-[80px] z-10 bg-red-900 fixed drop-shadow-lg text-white'>
      <div className='px-2 flex md:justify-center items-center w-full h-full'>
      <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          </div>
          <img className='md:hidden flex w-[80px]' src={logoImg} alt="/" />
        <div className='flex items-center font-bold'>

          <ul className="hidden md:flex gap-10 p-5">
            <li className='hover:bg-white hover:text-red-900 p-4'>Home</li>
            <li className='hover:bg-white hover:text-red-900 p-4'>About</li>
            <li className='hover:bg-white hover:text-red-900 p-4'>Events</li>
          </ul>
          <img className='hidden md:flex w-[80px] h-[80px] mx-5 translate-y-10' src={logoImg} alt="/" />
          <ul className="hidden md:flex gap-10 p-5">
            <li className='hover:bg-white hover:text-red-900 p-4'>News</li>
            <li className='hover:bg-white hover:text-red-900 p-4'>Shop</li>
            <li className='hover:bg-white hover:text-red-900 p-4'>Login</li>
          </ul>
        </div>

      </div>

      <ul className={!nav ? 'hidden' : 'md:hidden absolute bg-white w-full px-8 text-red-900 font-bold py-2'}>
        <li className='border-b-2 border-zinc-300 w-full py-2'>Home</li>
        <li className='border-b-2 border-zinc-300 w-full py-2'>About</li>
        <li className='border-b-2 border-zinc-300 w-full py-2'>Events</li>
        <li className='border-b-2 border-zinc-300 w-full py-2'>News</li>
        <li className='border-b-2 border-zinc-300 w-full py-2'>Shop</li>
        <li className='py-2'>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;