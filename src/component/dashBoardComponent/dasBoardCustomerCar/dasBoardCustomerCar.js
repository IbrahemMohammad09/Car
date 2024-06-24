import React, { useEffect, useState } from 'react';
import './dasBoardCustomerCar.css';
import { Table, Badge, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import API from '../../../constant/api';
import Loading from '../../SharedComponents/Loading/Loading';

function DashBoardCustomerCar() {
  const customers = [
    { name: 'Jane Cooper', phone: '(225) 555-0118', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Floyd Milles', phone: '(205) 555-0100', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Inactive' },
    { name: 'Ronald Richards', phone: '(302) 555-0107', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Inactive' },
    { name: 'Marvin Mckinney', phone: '(252) 555-0126', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Jerome Bell', phone: '(629) 555-0129', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Kathryn Murphy', phone: '(406) 555-0120', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Jacob Jones', phone: '(208) 555-0112', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Kristin Watson', phone: '(704) 555-0127', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Inactive' },
    { name: 'Jane Cooper', phone: '(225) 555-0118', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Floyd Milles', phone: '(205) 555-0100', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Inactive' },
    { name: 'Ronald Richards', phone: '(302) 555-0107', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Inactive' },
    { name: 'Marvin Mckinney', phone: '(252) 555-0126', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Jerome Bell', phone: '(629) 555-0129', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Kathryn Murphy', phone: '(406) 555-0120', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Jacob Jones', phone: '(208) 555-0112', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Kristin Watson', phone: '(704) 555-0127', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Inactive' },
    { name: 'Jane Cooper', phone: '(225) 555-0118', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Floyd Milles', phone: '(205) 555-0100', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Inactive' },
    { name: 'Ronald Richards', phone: '(302) 555-0107', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Inactive' },
    { name: 'Marvin Mckinney', phone: '(252) 555-0126', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Jerome Bell', phone: '(629) 555-0129', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Kathryn Murphy', phone: '(406) 555-0120', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Jacob Jones', phone: '(208) 555-0112', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
    { name: 'Kristin Watson', phone: '(704) 555-0127', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Inactive' },
    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    setLoading(true);
    axios.get(API.GET.ALLBOOKINGS+currentPage, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => {
        if(res?.data?.state === 'success') {
          setBookings(res?.data?.messages)
        }
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      })
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='dash-customer'>
      <div className='customer-h1'>
        <h1>All Customers</h1>
      </div>
      <Loading loading={loading} style={'absolute left-[50%] translate-x-[-50%]'}/>
      {!loading && bookings && <div className='customer-table'>
        <Table striped hover>
          <thead>
            <tr className='first-row'>
              <th>Name/اسم الزبن</th>
              <th>Phone/رقم هاتفه</th>
              <th>Start Date/موعد بدأ التأجير</th>
              <th>End Date/موعد نهاية التأجير</th>
              <th>Car/اسم السيارة</th>
              <th>Status/الحالة</th>
            </tr>
          </thead>
          <tbody>
            {bookings && bookings.map((book, index) => (
              <tr key={index}>
                <td>{book.name}</td>
                <td>{book.phone}</td>
                <td>{book.start}</td>
                <td>{book.end}</td>
                <td>{book.car_id}</td>
                <td>
                  <Badge bg={book.status === 'accepted' ? 'success' : 
                  book.status === 'rejected'? 'danger': 'dark'}>
                    {book.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          <Pagination.First className='Pagination' onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
          {[...Array(bookings.total)].map((_, index) => (
            <Pagination.Item
            className='Pagination'  
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Last className='Pagination' onClick={() => handlePageChange(bookings.total)} disabled={currentPage === bookings.total} />
        </Pagination>
      </div>}
    </div>
  );
}

export default DashBoardCustomerCar;
