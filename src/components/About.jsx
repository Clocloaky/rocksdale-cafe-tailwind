import React from 'react'
import aboutImg from '../assets/lily-banse-aboutimage5.jpg'
import aboutImg2 from '../assets/davide-cantelli-aboutimage4.jpg'
import aboutImg3 from '../assets/piotr-szulawski-aboutimage2.jpg'
const About = () => {
  return (
    <div>
        <div className='grid md:grid-cols-2 px-10 gap-10'>
            <img className='w-full h-full object-cover' src={aboutImg} alt="" />
            <div className='p-10'>
                <h1 className='text-center text-bold text-3xl pb-5'>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore assumenda, a voluptate consectetur possimus fugiat optio quaerat ducimus commodi quas soluta atque. Ad quas ducimus quae aperiam, tenetur quasi enim. Nisi harum ea modi amet eligendi iure nemo itaque exercitationem quas temporibus, placeat, dignissimos molestias blanditiis. Mollitia, sed magnam!</p>
            </div>
            <img className='w-full h-full object-cover' src={aboutImg2} alt="" />
            <img className='w-full h-full object-cover' src={aboutImg3} alt="" />
        </div>
    </div>
  )
}

export default About