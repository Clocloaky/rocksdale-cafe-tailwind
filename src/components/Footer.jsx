import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date();

  return (
    <div>
      <div className='grid grid-cols-4 px-10 py-20 bg-red-800 text-center text-white font-bold md:px-20 lg:px-40'>
        <div>
          <p className='pb-2'>1234 Pilgrim Drive</p>
          <p>Annapolis, Maryland 21401</p>
          <p className='pb-2'>9am to 3pm</p>
          <p>Closed on Tuesdays</p>
        </div>
        <div>
        </div>
        <div>
          <ul>
            <li><Link to='/Menu'>Menu</Link></li>
            <li><Link to='/Shop'>Shop</Link></li>
            <li><Link to='/Events'>Events</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a>Instagram</a></li>
            <li><a>Facebook</a></li>
            <li><a>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className='bg-red-800 text-center text-white'>Rocksdale Cafe @{year.getFullYear()}</h3>
      </div>
    </div>
  )
}

export default Footer