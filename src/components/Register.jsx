import { UserGroupIcon, ClipboardListIcon, ShoppingBagIcon } from '@heroicons/react/solid';
import { FaGooglePlusSquare, FaTwitterSquare } from 'react-icons/fa'
import RegisterForm from "./RegisterForm";

const Register = () => {

    return (

        <div className='pt-[100px] pb-[60px] grid grid-cols-1 md:px-20 lg:px-40 lg:grid-cols-3'>
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
                        <FaGooglePlusSquare className='w-full text-red-500 text-5xl' />
                    </button>
                    <button className=''>
                        <FaTwitterSquare className='w-full text-red-500 text-5xl' />
                    </button>
                    <hr className='border border-red-500' />
                </div>
               <RegisterForm />
            </div>
        </div>
    )
}

export default Register;