import { useState } from 'react'

//user input validation
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const RegisterForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPass, setVerifyPass] = useState('');
    const [newsCheckState, setNewsCheckState] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName)
    }

    return (
        <form className='col-span-2'
            onSubmit={handleSubmit}
        >
            <label className='block text-gray-700 text-sm font-bold p-2' htmlFor='fname'>First name</label>
            <input className='appearance-none bg-gray-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border focus:bg-white'
                type='text'
                id='fname'
                name='fname'
                placeholder='First Name'
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
            />

            <label className='block text-gray-700 text-sm font-bold p-2' htmlFor='lname'>Last name</label>
            <input className='appearance-none bg-gray-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border focus:bg-white'
                type='text'
                id='lname'
                name='lname'
                placeholder='Last Name'
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />

            <label className='block text-gray-700 text-sm font-bold p-2' htmlFor='email'>Email</label>
            <input className='appearance-none bg-gray-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border focus:bg-white'
                type='text'
                id='email'
                name='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label className='block text-gray-700 text-sm font-bold p-2' htmlFor='password'>Password</label>
            <input className='appearance-none bg-gray-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border focus:bg-white'
                type='text'
                id='password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <label className='block text-gray-700 text-sm font-bold p-2' htmlFor='verifyPassword'>Verify Password</label>
            <input className='appearance-none bg-gray-100 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border focus:bg-white'
                type='text'
                id='verifyPassword'
                name='verifyPassword'
                onChange={(e) => setVerifyPass(e.target.value)}
                value={verifyPass}
            />

            <label className='pt-4 md:w-2/3 block text-gray-500 font-bold'>
                <input className='mr-2 leading-tight'
                    type='checkbox'
                    onChange={(e) => setNewsCheckState(!newsCheckState)}
                />
                <span className='text-sm text-black'>
                    Send me your newsletter!
                </span>
            </label>
            <p className='py-4 text-center text-xs text-gray-500'>By signing up, you are agreeing to our Terms of Service, Privacy Policy, and our default Notification Settings.</p>
            <button className='bg-red-700 text-white font-bold rounded-lg p-2 w-full' >Signup</button>
        </form>
    )
}

export default RegisterForm;