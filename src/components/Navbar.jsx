
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logoImg from '../assets/rocksdalelogo.png';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
 
  const hideAddress = () => {
    console.log(window.scrollY);
    if(window.scrollY > 200){
      document.getElementById("top-address").className = "hidden";
      document.getElementById("logo").className="hidden md:block md:w-[100px] md:h-[100px] md:m-auto"
    }
    else{
      document.getElementById("top-address").className = "hidden md:block text-center";
      document.getElementById("logo").className="hidden md:flex md:justify-center";
    }
  }

  window.addEventListener('scroll', hideAddress);

  return (
    <nav className='w-screen z-10 bg-white fixed text-red-500 pt-5'>
      <div>
        <h1 id="top-address" className='hidden md:block text-center text-sm text-zinc-400'>1234 Pilgrim Drive, Annapolis Maryland&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(123)-456-7890</h1>
      </div>
      <div id="logo" className='hidden md:flex md:justify-center'>
        <img className='' src={logoImg} alt="/" />
      </div>
      <div className='flex md:justify-center items-center w-full h-full'>
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        </div>
        <img className='md:hidden flex w-[80px]' src={logoImg} alt="/" />
        <div className='flex items-center font-bold'>

          <ul className="hidden md:flex gap-10 p-5">
            <li className='hover:text-zinc-500 p-4'>Home</li>
            <li className='hover:text-zinc-500 p-4'>Events</li>
          </ul>

          <ul className="hidden md:flex gap-10 p-5">
            <li className='hover:text-zinc-500 p-4'>News</li>
            <li className='hover:text-zinc-500 p-4'>Shop</li>
            <li className='hover:text-zinc-500 p-4'>Login</li>
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