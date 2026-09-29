import React, { useEffect, useState } from 'react';
import './dasBoardCustomerCar.css';
import { Table, Badge, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteBooking, getBookings, updateBooking } from '../../data/staticData';
import Loading from '../../component/SharedComponents/Loading/Loading';
import DashBoard from "../dashBoard/dasBoard"
import { ToastContainer, toast } from "react-toastify";

function Bookings() {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookings, setBookings] = useState(getBookings);

  const [isDelete, setDelete] = useState();

  // Backend version retained: axios.get(API.GET.ALLBOOKINGS + currentPage, { headers: { Authorization: `Bearer ${token}` } });
  useEffect(() => setBookings(getBookings()), [isDelete]);
  const pageCount = Math.max(1, Math.ceil(bookings.length / 10));
  const visibleBookings = bookings.slice((currentPage - 1) * 10, currentPage * 10);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

    const [showAlert, setShowAlert] = useState(false);

    const deleteItem = async (id) => {
        // Backend version retained: axios.delete(API.DELETE.BOOKING + id, { headers: { Authorization: `Bearer ${token}` } });
        deleteBooking(id);
        toast.success('Demo booking deleted.');
        setDelete(id);
        setShowAlert(false);
    }

    const handleAccept = (id) => {
      // Backend version retained: axios.put(API.PUT.ACCEPTBOOKING + id, null, { headers: { Authorization: `Bearer ${token}` } });
      updateBooking(id, { status: 'accepted' });
      toast.success('Demo booking accepted.');
      setDelete(id);
      setShowAlert(false);
    }

    const handleReject = (id) => {
      // Backend version retained: axios.put(API.PUT.REGECTBOOKING + id, null, { headers: { Authorization: `Bearer ${token}` } });
      updateBooking(id, { status: 'rejected' });
      toast.success('Demo booking rejected.');
      setDelete(id);
      setShowAlert(false);
    }

  return (
    <DashBoard>
    <ToastContainer/>
    <div className='dash-customer'>
      <h1 className={'mb-5 underline'}>All Bookings</h1>
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
            {visibleBookings.map((book, index) => (
              <tr key={index} onClick={() => setShowAlert(book)} className={'cursor-pointer'}>
                <td>{book.name}</td>
                <td>{book.phone}</td>
                <td>{book.start}</td>
                <td>{book.end}</td>
                <td>{book?.car?.name}</td>
                <td>
                  <Badge bg={book.status === 'accepted' ? 'success' : 
                  book.status === 'rejected'? 'danger': 'secondary'}>
                    {book.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          <Pagination.First className='Pagination' onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
          {[...Array(pageCount)].map((_, index) => (
            <Pagination.Item
            className='Pagination'  
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Last className='Pagination' onClick={() => handlePageChange(pageCount)} disabled={currentPage === pageCount} />
        </Pagination>
      </div>}
    </div>
        {showAlert && <div className='w-[500px] bg-white rounded-md absolute left-[50%] top-[20%] translate-x-[-50%] translate-y-[-50%] text-center px-3 py-5 z-50 border-[1px] border-__brown border-solid shadow-md shadow-[#ccc]'>
            <p>Manage this booking:</p>
            <p className='mt-[-10px] font-bold'>{showAlert._id}</p>
            <div className='flex justify-center items-center gap-3'>
                <div className='cursor-pointer duration-300 hover:scale-95 rounded-sm p-2 px-4 border-[1px] border-solid border-__brown' onClick={() => deleteItem(showAlert._id)}>Delete</div>
                {showAlert.status === 'pending' && <div className='cursor-pointer duration-300 hover:scale-95 rounded-sm p-2 px-4 border-[1px] border-solid border-__brown' onClick={() => handleAccept(showAlert._id)}>Accept</div>}
                {showAlert.status === 'pending' && <div className='cursor-pointer duration-300 hover:scale-95 rounded-sm p-2 px-4 border-[1px] border-solid border-__brown' onClick={() => handleReject(showAlert._id)}>Reject</div>}
                <div className='cursor-pointer duration-300 hover:scale-95 rounded-sm p-2 px-4 border-[1px] border-solid border-__brown' onClick={() => setShowAlert(false)}>Close</div>
            </div>
        </div>}
    </DashBoard>
  );
}

export default Bookings;
