import React, { useState } from 'react';
import './dasBoardCustomerCar.css';
import { Table, Badge, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  const rowsPerPage = 10;

  const totalPages = Math.ceil(customers.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentCustomers = customers.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className='dash-customer'>
      <div className='customer-h1'>
        <h1>All Customers</h1>
      </div>
      <div className='customer-table'>
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
            {currentCustomers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.startDate}</td>
                <td>{customer.endDate}</td>
                <td>{customer.car}</td>
                <td>
                  <Badge bg={customer.status === 'Active' ? 'success' : 'danger'}>
                    {customer.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          <Pagination.First className='Pagination' onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
            className='Pagination'  
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Last className='Pagination' onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      </div>
    </div>
  );
}

export default DashBoardCustomerCar;
