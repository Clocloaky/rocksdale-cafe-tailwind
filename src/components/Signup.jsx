import React from 'react'
import { UserGroupIcon, ClipboardListIcon, ShoppingBagIcon } from '@heroicons/react/solid';
import { FaGooglePlusSquare, FaTwitterSquare } from 'react-icons/fa'

const About = () => {
    return (
        <about>
            <div className='pt-[100px] pb-[60px] grid grid-cols-1 lg:grid-cols-3'>
                <div className="col-span-2 text-black bg-white px-10 pb-20">
                    <div className='pb-20'>
                        <h1 className='text-4xl text-center font-bold'>Sign up for a free account</h1>
                        <p className='text-center text-red-500 font-bold pb-5'>Keep track of your games played</p>
                        <hr className='border-4 border-red-600' />
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        <div className='grid grid-rows-2 overflow-clip aspect-square rounded-lg border-2 border-red-500 font-bold text-center'>
                            <UserGroupIcon className='text-red-300' />
                            <h1 className=''>Find other players</h1>
                        </div>
                        <div className='grid grid-rows-2 overflow-clip aspect-square rounded-lg border-2 border-red-500   font-bold text-center'>
                            <ClipboardListIcon className='text-red-300' />
                            <h1>Post on the Event Page</h1>
                        </div>
                        <div className='grid grid-rows-2 overflow-clip aspect-square rounded-lg border-2 border-red-500   font-bold text-center'>
                            <ShoppingBagIcon className='text-red-300' />
                            <h1>Save your orders</h1>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 z-9 px-10'>
                    <div>
                    <button className='' >
                        <FaGooglePlusSquare className='w-full text-red-500 text-5xl'/>
                    </button>
                    <button className=''>
                        <FaTwitterSquare className='w-full text-red-500 text-5xl'/>
                    </button>
                    <hr className='border border-red-500'/>
                    </div>
                    <form className='col-span-2'>
                        <label className="block text-gray-700 text-sm font-bold p-2" htmlFor="fname">First name</label>
                        <input className="appearance-none bg-gray-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border focus:bg-white" type="text" id="fname" name="fname" />

                        <label className="block text-gray-700 text-sm font-bold p-2" htmlFor="lname">Last name</label>
                        <input className="appearance-none bg-gray-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border focus:bg-white" type="text" id="lname" name="lname" />

                        <label className="block text-gray-700 text-sm font-bold p-2" htmlFor="email">Email</label>
                        <input className="appearance-none bg-gray-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border focus:bg-white" type="text" id="email" name="email" />

                        <label className="block text-gray-700 text-sm font-bold p-2" htmlFor="password">Password</label>
                        <input className="appearance-none bg-gray-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border focus:bg-white" type="text" id="password" name="password" />

                        <label className="pt-4 md:w-2/3 block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox" />
                            <span className="text-sm text-black">
                                Send me your newsletter!
                            </span>
                        </label>
                        <p className='py-4 text-center text-xs text-gray-500'>By signing up, you are agreeing to our Terms of Service, Privacy Policy, and our default Notification Settings.</p>
                        <button className='bg-red-700 text-white font-bold rounded-lg p-2 w-full' >Signup</button>
                    </form>
                </div>
            </div>
        </about>
    )
};

export default About;