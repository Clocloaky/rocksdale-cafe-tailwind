import gamesplashImg from '../assets/boardgames.jpg'
import foodsplashImg from '../assets/foodsplash.jpg'
import blogImg from '../assets/blogsplash.jpg'
import { Link } from 'react-router-dom'


/*Add text to the image overlay so words show up when hovering over the images. jfc i didn't know just putting TEXT over 
the images would be so hard like why */

const Hero = () => {
  return (

    // aspect-square allows for square images - figure out the hierarchy later
    <div className='grid grid-rows-3 grid-flow-col pt-[45px] md:h-[1200px] md:pt-[450px] md:gap-10 md:px-20 lg:px-40 '>



      <div className="col-span-1 text-3xl text-white md:row-span-4 md:col-span-2 lg:text-transparent hover:text-white bg-zinc-800 lg:opacity-80 lg:hover:opacity-100 lg:hover:scale-105 transition-all ease-in-out duration-500">
        <img className='aspect-square lg:aspect-auto w-full h-full object-cover' src={foodsplashImg} alt="" />
        <h1 className='w-full h-full transform -translate-y-full flex justify-center items-center md:text-6xl font-bold bg-red'><Link to='/Menu'>Menu</Link></h1>
      </div>
      <div className="col-span-1 text-3xl text-white md:row-start-1 md:row-end-3 md:col-span-2 lg:text-transparent hover:text-white bg-zinc-800 lg:opacity-80 lg:hover:opacity-100 lg:hover:scale-105 transition-all ease-in-out duration-500">
        <img className='aspect-square lg:aspect-auto w-full h-full object-cover' src={gamesplashImg} alt="" />
        <h1 className='w-full h-full transform -translate-y-full flex justify-center items-center md:text-6xl font-bold'>Games</h1>
      </div>
      <div className="col-span-1 text-3xl text-white md:row-start-3 md:row-end-5 md:col-span-2 lg:text-transparent hover:text-white bg-zinc-800 lg:opacity-80 lg:hover:opacity-100 lg:hover:scale-105 transition-all ease-in-out duration-500">
        <img className='aspect-square lg:aspect-auto w-full h-full object-cover' src={blogImg} alt="" />
        <h1 className='w-full h-full transform -translate-y-full flex justify-center items-center md:text-6xl font-bold'>News</h1>
      </div>

    </div>

  );
};

export default Hero;