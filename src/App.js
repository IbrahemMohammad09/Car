import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardLoginPage from './pages/dashBoardLoginPage/dashBoardLoginPage';
import DashBoard from './pages/dashBoard/dasBoard';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard_login' element={<DashBoardLoginPage/>}/>
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
