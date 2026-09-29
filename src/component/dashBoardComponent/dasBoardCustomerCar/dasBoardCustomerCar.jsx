import React, { useState } from 'react';
import './dasBoardCustomerCar.css';
import { Table, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getBookings } from '../../../data/staticData';

function DashBoardCustomerCar() {
  // Backend version retained: axios.get(API.GET.ALLBOOKINGS + currentPage, { headers: { Authorization: `Bearer ${token}` } });
  const [bookings] = useState(getBookings);

  return (
    <div className='dash-customer'>
      <div className='customer-h1'>
        <h1>All Customers</h1>
      </div>
      {bookings && <div className='customer-table'>
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
                <td>{book.car?.name || book.car_id}</td>
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
      </div>}
    </div>
  );
}

export default DashBoardCustomerCar;
