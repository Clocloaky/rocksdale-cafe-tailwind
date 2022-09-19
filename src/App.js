import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import EventsPage from './pages/Eventspage'
import EventsDetailsPage from '../src/pages/EventsDetailPage'
import ErrorPage from './pages/ErrorPage';
import Menu from './pages/Menu';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartContext } from './components/cartContext';
import { useMemo, useState } from 'react';


function App() {

  const [cartItems, setCartItems] = useState([]);
  //store only when there is a change in the state
  const value = useMemo(() => ({cartItems, setCartItems}), [cartItems, setCartItems]);

  return (

    <Router>
      <CartContext.Provider value ={value}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Events' element={<EventsPage />} />
        <Route path="Events/:eventID" element={<EventsDetailsPage />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
      </CartContext.Provider>
    </Router>

  );
}


export default App;
