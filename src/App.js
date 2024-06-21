import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardLoginPage from './pages/dashBoardLoginPage/dashBoardLoginPage';
import DashBoard from './pages/dashBoard/dasBoard';
import Home from './pages/Home/Home';
import AboutUs from './pages/dashBoard/aboutUs/aboutUs';



function App() {
  return (
    <div className='App' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/dashboard-login' element={<DashBoardLoginPage/>}/>
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
