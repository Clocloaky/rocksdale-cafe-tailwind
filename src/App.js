import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import EventsPage from './pages/Eventspage'
import EventsDetailsPage from '../src/pages/EventsDetailPage'
import ErrorPage from './pages/ErrorPage';
import NewsPage from './pages/NewsPage';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Events' element={<EventsPage />} />
        <Route path="Events/:eventID" element={<EventsDetailsPage />} />
        <Route path='/News' element={<NewsPage />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>

  );
}


export default App;


// import React, { useState, useEffect } from 'react';
// import ReactPaginate from 'react-paginate';
// import faker from 'faker'
// import './App.css';

// function App() {
//   const [pagination, setPagination] = useState({
//     data: new Array(1000).fill().map((value, index) => (({
//       id: index,
//       title: faker.lorem.words(5),
//       body: faker.lorem.sentences(8)
//     }))),
//     offset: 0,
//     numberPerPage: 10,
//     pageCount: 0,
//     currentData: []
//   });
//   useEffect(() => {
//     setPagination((prevState) => ({
//       ...prevState,
//       pageCount: prevState.data.length / prevState.numberPerPage,
//       currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
//     }))
//   }, [pagination.numberPerPage, pagination.offset])
//   const handlePageClick = event => {
//     const selected = event.selected;
//     const offset = selected * pagination.numberPerPage
//     setPagination({ ...pagination, offset })
//   }
//   return (
//     <div>
//       {pagination.currentData && pagination.currentData.map(((item, index) => (
//         <div key={item.id} className="post">
//           <h3>{`${item.title} - ${item.id}`}</h3>
//           <p>{item.body}</p>
//         </div>
//       )))
//       }
//       <ReactPaginate
//         previousLabel={'previous'}
//         nextLabel={'next'}
//         breakLabel={'...'}
//         pageCount={pagination.pageCount}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={5}
//         onPageChange={handlePageClick}
//         containerClassName={'pagination'}
//         activeClassName={'active'}
//       />
//     </div>
//   );
// }
// export default App;
