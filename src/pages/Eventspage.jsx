import React from 'react'
import { Link } from 'react-router-dom'
import { getEventData } from '../slices/eventPageFunctions'

const Eventspage = () => {
  const events = getEventData();
  return (
    <div className='md:px-20 md:pt-[450px] lg:px-40'>
      <div className='grid-cols-2'>
        <button>Today</button>
      </div>
      <div className='grid md:grid-cols-2 gap-10 py-[100px] lg:grid-cols-4'>
        {
          events.map(event => {
            return (
              <div className='shadow-lg bg-white' key={event.id}>
                <img className='bg-gray-500 object-cover' src={event.imageUrl} alt="" />
                <h1 className='text-3xl text-center font-bold'>{event.title}</h1>
                <div className='px-5 py-2'>
                  <p className='text-ellipsis overflow-hidden line-clamp-5'> <span className='font-light'>{event.date}</span> {event.body}</p>
                  <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={`/Events/${event.id}`}
                  >
                    Read More
                  </Link>
                </div>

              </div>
            )
          })
        }
      </div>


      <div className='px-10 py-[100px] border'>
        <h1>This is where the forum would go (Add later)</h1>
      </div>
    </div>
  )
}

export default Eventspage