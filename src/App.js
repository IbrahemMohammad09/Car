import './App.css';
import './animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import DashBoardLoginPage from './pages/dashBoardLoginPage/dashBoardLoginPage';
import DashBoard from './pages/dashBoard/dasBoard';
import Home from './pages/Home/Home';
import AboutUs from './pages/aboutUs/aboutUs';
import BookCar from './pages/bookCar/bookCar';
import { useEffect } from 'react';
import ErrorPage from './pages/errorPage/errorPage';
import 'react-toastify/dist/ReactToastify.css';
import DashBoardSetting from './component/dashBoardComponent/dashBoradSetting/dashBoradSetting';


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
          <Route path='/dashboard' element={token? <DashBoard />: <Navigate to="/"/>} />
          <Route path='/dashboard/edit/:id' element={token? <DashBoardSetting />: <Navigate to="/"/>} />
          <Route path='*' element={<Navigate to={'/error'} />} />
          <Route path='/error' element={<ErrorPage />} />          
        </Routes>
  );
}

export default App;
