import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import EventsPage from './pages/Eventspage'
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
        <Route path='/' element={<Home />}/>
        <Route path='/Events' element={<EventsPage />}/>
        <Route path='/News' element={<NewsPage />}/>
        <Route path='/Shop' element={<Shop />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
