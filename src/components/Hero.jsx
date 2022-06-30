
import gamesplashImg from '../assets/boardgames.jpg'
import foodsplashImg from '../assets/foodsplash.jpg'
import blogImg from '../assets/blogsplash.jpg'


/*Add text to the image overlay so words show up when hovering over the images. jfc i didn't know just putting TEXT over 
the images would be so hard like why */

const Hero = () => {
  return (


    // aspect-square allows for square images - figure out the hierarchy later
    <div className='grid grid-cols-1 pt-[120px] md:grid-rows-4 md:grid-flow-col md:h-[1200px] md:pt-[450px] md:gap-10 md:px-10 '>
      <div className="col-span-1 text-3xl text-white sm:row-span-2 md:row-span-4 md:col-span-2 md:text-transparent hover:text-white bg-zinc-800 md:opacity-80 md:hover:opacity-100 md:hover:scale-105 transition-all ease-in-out duration-500">
        <img className='aspect-square md:aspect-auto w-full h-full object-cover' src={foodsplashImg} alt="" />
        <h1 className='w-full h-full transform -translate-y-1/2 text-center md:text-6xl font-bold'>Order To Go</h1>
      </div>
      <div className="col-span-1 text-3xl text-white md:row-start-1 md:row-end-3 md:col-span-2 md:text-transparent hover:text-white bg-zinc-800 md:opacity-80 md:hover:opacity-100 md:hover:scale-105 transition-all ease-in-out duration-500">
        <img className='aspect-square md:aspect-auto w-full h-full object-cover' src={gamesplashImg} alt="" />
        <h1 className='w-full h-full transform -translate-y-1/2 text-center  md:text-6xl font-bold'>Games</h1>
      </div>
      <div className="col-span-1 text-3xl text-white md:row-start-3 md:row-end-5 md:col-span-2 md:text-transparent hover:text-white bg-zinc-800 md:opacity-80 md:hover:opacity-100 md:hover:scale-105 transition-all ease-in-out duration-500">
        <img className='aspect-square md:aspect-auto w-full h-full object-cover' src={blogImg} alt="" />
        <h1 className='w-full h-full transform -translate-y-1/2 text-center md:text-6xl font-bold'>Latest News</h1>
      </div>
    </div>

  );
};

export default Hero;