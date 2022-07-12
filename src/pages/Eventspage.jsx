import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { getEventData } from '../slices/eventPageFunctions'

const Eventspage = () => {
  const events = getEventData();

  const [pagination, setPagination] = useState({
    data: events.map((value, index) => (({
      id: index,
      imageUrl: value.imageUrl,
      title: value.title,
      date: value.date,
      type: value.type,
      body: value.body
    }))),
    offset: 0,
    numberPerPage: 4,
    pageCount: 0,
    currentData: []
  });

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
    }))
  }, [pagination.numberPerPage, pagination.offset])

  const handlePageClick = event => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset })
  }

  return (

    <div className='py-[100px] gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-20 md:pt-[450px] lg:px-40'>
      {pagination.currentData && pagination.currentData.map(((event, index) => (
        <div key={index}>
          <div className='shadow-lg bg-white' key={event.id}>
            <img className='bg-gray-500 object-cover h-[300px]' src={event.imageUrl} alt="" />
            <h1 className='text-3xl text-center font-bold text-ellipsis overflow-hidden line-clamp-1'>{event.title}</h1>
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
        </div>
      )))
      }
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLavel={'...'}
        pageCount={pagination.pageCount}
        marginPageDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'flex gap-5 px-10'}
        activeClassName={'active'}
      />
    </div>


    // <div className='md:px-20 md:pt-[450px] lg:px-40'>
    //   <div className='grid-cols-2'>
    //     <button>Today</button>
    //   </div>
    //   <div className='grid md:grid-cols-2 gap-10 py-[100px] lg:grid-cols-4'>
    //     {
    //       events.map(event => {
    //         return (
    // <div className='shadow-lg bg-white' key={event.id}>
    //   <img className='bg-gray-500 object-cover' src={event.imageUrl} alt="" />
    //   <h1 className='text-3xl text-center font-bold'>{event.title}</h1>
    //   <div className='px-5 py-2'>
    //     <p className='text-ellipsis overflow-hidden line-clamp-5'> <span className='font-light'>{event.date}</span> {event.body}</p>
    //     <Link
    //       style={{ display: "block", margin: "1rem 0" }}
    //       to={`/Events/${event.id}`}
    //     >
    //       Read More
    //     </Link>
    //   </div>

    // </div>
    //         )
    //       })
    //     }
    //   </div>


    //   <div className='px-10 py-[100px] border'>
    //     <h1>This is where the forum would go (Add later)</h1>
    //   </div>
    // </div>
  )
}

export default Eventspage