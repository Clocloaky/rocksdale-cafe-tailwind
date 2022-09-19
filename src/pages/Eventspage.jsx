import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { getEventData } from '../slices/eventPageFunctions'
import Featured from '../components/Featured';

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

  const mockupDate = new Date();

  return (

    <>
      <div className='px-10 md:pt-[400px] md:px-20 lg:px-40 pb-10'>
        <h1 className='text-4xl font-bold pb-10'>News</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='md:pr-3'>
            <h1 className='font-bold'>Featured Post</h1>
            <div>
              <img className='w-full h-[300px] object-cover md:rounded-md' src="../event-images/event-image10.jpg" alt="" />
            </div>
            <p className='text-sm p-2 font-light'>{mockupDate.toString()}</p>
            <p className='pb-5'>Make your own board game using a blank board game template! On this page you’ll find 6 unique board game templates in black and white and color. Throughout elementary, middle, and high school, students sometimes have to make their own board games as part of a Language Arts or Social Studies assignment. Drawing a game board by hand can be tricky, and for that reason I’ve created this set of blank game boards for kids, students and teachers to print.</p>
            <a className='text-red-800' href="#">Read More</a>
          </div>
          <div className='px-10'>
            <Featured />
          </div>
        </div>
      </div>
      <hr />

      <div className='px-10 py-[100px] gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-20 lg:px-40'>
        {pagination.currentData && pagination.currentData.map(((event, index) => (
          <div key={index}>
            <div className='shadow-lg bg-white md:rounded-md md:h-full' key={event.id}>
              <img className='bg-gray-500 object-cover h-[300px] md:rounded-t-md' src={event.imageUrl} alt="" />
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

    </>
  )
}

export default Eventspage