import './App.css';
import './animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import DashBoardLoginPage from './pages/dashBoardLoginPage/dashBoardLoginPage';
import Home from './pages/Home/Home';
import AboutUs from './pages/aboutUs/aboutUs';
import BookCar from './pages/bookCar/bookCar';
import { useEffect } from 'react';
import ErrorPage from './pages/errorPage/errorPage';
import 'react-toastify/dist/ReactToastify.css';
import HomeDash from './pages/HomeDash/HomeDash';
import ShowCars from './pages/ShowCars/ShowCars';
import AddCar from './pages/AddCar/AddCar';
import Bookings from './pages/Bookings/Bookings';
import AddBrand from './pages/AddBrand/AddBrand';
import SearchPage from './pages/searchPage/searchPage';

function App() {
  const token = localStorage.getItem('token');

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/book-car/:id' element={<BookCar />}/>
          <Route path='/dashboard-login' element={!token ?<DashBoardLoginPage/>: <Navigate to="/dashboard"/>}/>
          <Route path='/dashboard' element={token? <HomeDash/>: <Navigate to="/"/>} />
          <Route path='/dash' element={<HomeDash/>}/>
          <Route path='/dashboard/add' element={token? <AddCar/>: <Navigate to="/"/>} />
          <Route path='/dashboard/show' element={token? <ShowCars />: <Navigate to="/"/>} />
          <Route path='/dashboard/brands' element={token? <AddBrand />: <Navigate to="/"/>} />
          <Route path='/dashboard/brands/:id' element={token? <AddBrand />: <Navigate to="/"/>} />
          <Route path='/dashboard/bookings' element={token? <Bookings />: <Navigate to="/"/>} />
          <Route path='/dashboard/edit/:id' element={token? <AddCar />: <Navigate to="/"/>} />
          <Route path='*' element={<Navigate to={'/error'} />} />
          <Route path='/error' element={<ErrorPage />} />    
          <Route path='/search/:name' element={<SearchPage />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
  );
}

export default App;
