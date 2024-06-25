// import { Button, Container,Row } from 'react-bootstrap';
// import './dashBoradSetting.css'
// import { useEffect, useState } from 'react';
// import DashBoardDetails from './dashBoardDetails/dashBoardDetails';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import DashBoardCarPics from './dashBoardCarPics/dashBoardCarPics';
// import axios from 'axios';
// import API from '../../../constant/api';
// import { ToastContainer, toast } from 'react-toastify';


// function DashBoardSetting (){
//     const [page, setPage] = useState('details');

//     return(
//     <Container className='dash-setting'>
//             <ToastContainer/>
//             <h1>Settings</h1>
//             <button className='button-detail' onClick={()=>setPage("details")}>Details</button>
//             <button className='button-pics' onClick={()=>setPage("picture")}>Pictures</button>
//             <div className={`${page === 'details'? 'block': 'hidden'}`}>
//                 <DashBoardDetails 
//                     setBrand={setBrand}
//                     brand={brand}
//                     setCategory={setCategory}
//                     seat={seatNumber}
//                     setColor={setColor}
//                     name={name}
//                     setDayly={setDayly}
//                     category={category}
//                     setDescAr={setDescAr}
//                     der={descAr}
//                     setDescEn={setDescEn}
//                     den={descEn}
//                     setGear={setGear}
//                     gear={gear}
//                     setHorse={setHorse}
//                     color={color}
//                     setModel={setModel}
//                     model={model}
//                     setMonthly={setMonthly}
//                     monthly={monthly}
//                     setTopSpeed={setTopSpeed}
//                     dayly={dayly}
//                     setName={setName}
//                     weekly={weekly}
//                     setSeatNumber={setSeatNumber}
//                     horse={horse}
//                     setWeekly={setWeekly}
//                     speed={topSpeed}
//                 />
//             </div>
//             <div className={`${page === 'picture'? 'block': 'hidden'}`}>
//                 <DashBoardCarPics 
//                     setPictures={setPictures}
//                     setPage={setPage}
//                     id={id}
//                     pics={pictures}
//                 />
//             </div>
//             {page !== 'picture' && <Button variant="primary" onClick={handleCreate}>
//                     {id? 'Update':'Add'} Car
//             </Button>}
//     </Container>
//     );
// }


// export default DashBoardSetting