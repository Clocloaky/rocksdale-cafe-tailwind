
import gamesplashImg from '../assets/boardgames.jpg'
import foodsplashImg from '../assets/foodsplash.jpg'
import blogImg from '../assets/blogsplash.jpg'

const Hero = () => {
  return (

    <div className='grid grid-cols-1 md:grid-rows-3 md:grid-cols-2 md:mx-10 md:pt-[400px]' >
      <div className='row-span-4 md:mr-4 hover:bg-zinc-800 md:hover:scale-105 transition-all ease-in-out duration-500'>
        <img className='h-full w-full object-cover opacity-80' src={foodsplashImg} alt="" />
      </div>
      <div className='grid-cols-1 md:row-span-3'>
        <div className='bg-white md:ml-4 md:mb-4 hover:bg-zinc-800 md:hover:scale-105 transition-all ease-in-out duration-500'>
          <img src={gamesplashImg} alt="" className='h-full w-full object-cover opacity-80' />
        </div>
        <div className='bg-white md:ml-4 md:mt-4 hover:bg-zinc-800 md:hover:scale-105 transition-all ease-in-out duration-500'>
          <img src={blogImg} alt="" className='h-[400px] w-full object-cover opacity-80' />
        </div>

      </div>

    </div>

  )
};

export default Hero;