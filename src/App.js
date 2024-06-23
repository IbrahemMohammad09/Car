import './App.css';
import './animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashBoardLoginPage from './pages/dashBoardLoginPage/dashBoardLoginPage';
import DashBoard from './pages/dashBoard/dasBoard';
import Home from './pages/Home/Home';
import AboutUs from './pages/aboutUs/aboutUs';
import BookCar from './pages/bookCar/bookCar';
import ErrorPage from './pages/errorPage/errorPage';

function App() {
  return (
    <div className='App' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/book-car/' element={<BookCar />}/>
          <Route path='/dashboard-login' element={<DashBoardLoginPage/>}/>
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='*' element={<Navigate to={'/error'} />} />
          <Route path='/error' element={<ErrorPage />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
