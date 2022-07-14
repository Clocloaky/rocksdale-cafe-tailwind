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

  const mockupDate = new Date();

  return (

    <>
      <div className='md:pt-[450px] md:px-20 lg:px-40'>
        <h1 className='text-4xl font-bold pb-10'>News</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div>
            <h1>Featured Post</h1>
            <div>
              <img className='w-full h-60' src="" alt="" />
            </div>
            <p className='text-sm p-2 font-light'>{mockupDate.toString()}</p>
            <p className='pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil itaque pariatur odio eius obcaecati minus nesciunt debitis quis nostrum libero harum qui omnis alias culpa nemo eveniet beatae voluptas, fugiat dolore! Autem eveniet labore quidem eius velit numquam distinctio corrupti deleniti facilis adipisci facere dolores doloribus cumque debitis tempora, perferendis sed dolorum totam. Assumenda, est itaque? Illo expedita dicta quos ipsum obcaecati molestias reiciendis neque, quibusdam repellendus, excepturi nulla!</p>
            <a className='text-red-800' href="#">Read More</a>
          </div>
          <div>
            <h1>New in the Shop!</h1>
          </div>
        </div>
      </div>


      <div className='py-[100px] gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-20 lg:px-40'>
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

    </>
  )
}

export default Eventspage