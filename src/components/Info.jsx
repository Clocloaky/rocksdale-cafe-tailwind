import React from 'react'

const Info = () => {
  return (
    <div>
        <div className="grid md:grid-cols-3 text-center px-20 pt-40 pb-10">
            <div className='pb-10'>
            <h1 className='text-3xl text-red-500 font-bold pb-5'>Location</h1>
            <p className='pb-2'>1234 Pilgrim Drive</p>
            <p>Annapolis, Maryland 21401</p>
            </div>
            <div className='pb-10'>
            <h1 className='text-3xl text-red-500 font-bold pb-5'>Hours</h1>
            <p className='pb-2'>9am to 3pm</p>
            <p>Closed on Tuesdays</p>
            </div>
            <div className='pb-10'>
            <h1 className='text-3xl text-red-500 font-bold pb-5'>Contact</h1>
            <p className='pb-2'>Phone: (123)-456-7890</p>
            <p className='pb-2'>Email: hello@rocksdale-cafe.com</p>
            <p>Socials: FB, INSTAGRAM, TWITTER</p>
            </div>

        </div>
    </div>
  )
}

export default Info