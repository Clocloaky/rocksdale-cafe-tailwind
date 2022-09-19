import React from 'react'
import aboutImg from '../assets/lily-banse-aboutimage5.jpg'
import aboutImg2 from '../assets/davide-cantelli-aboutimage4.jpg'
import aboutImg3 from '../assets/piotr-szulawski-aboutimage2.jpg'
const About = () => {
  return (
    <div>
      <div className='grid gap-10 md:grid-cols-2 md:px-10 lg:px-40 '>
        <img className='w-full h-full object-cover md:rounded-md' src={aboutImg} alt="" />
        <div className='p-10'>
          <h1 className='text-center text-bold text-3xl pb-5'>About Us</h1>
          <p>We welcome you to sit back, unwind and play some board games while our best gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients. Rocksdale Cafe is a family friendly place to gather for a fun time. 
            Enjoy our dazzling dishes and make the most of your eating background with us!</p>
        </div>
        <img className='w-full h-full object-cover md:rounded-md' src={aboutImg2} alt="" />
        <img className='w-full h-full object-cover md:rounded-md' src={aboutImg3} alt="" />
      </div>
    </div>
  )
}

export default About