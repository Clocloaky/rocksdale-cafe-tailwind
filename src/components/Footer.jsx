import React from 'react'
import logoImg from '../assets/rocksdalelogo.png'

const Footer = () => {
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
            <li><a>Menu</a></li>
            <li><a>Games</a></li>
            <li><a>Shop</a></li>
            <li><a>News</a></li>
            <li><a>Events</a></li>
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
        <h3 className='bg-red-800 text-center text-white'>Rocksdale Cafe @2022</h3>
      </div>
    </div>
  )
}

export default Footer