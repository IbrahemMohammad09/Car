import './dasBoardCustomerCar.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function DashBoardCustomerCar (){
    const customers = [
        { name: 'Jane Cooper', phone: '(225) 555-0118', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
        { name: 'Floyd Milles', phone: '(205) 555-0100', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Inactive' },
        { name: 'Ronald Richards', phone: '(302) 555-0107', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Inactive' },
        { name: 'Marvin Mckinney', phone: '(252) 555-0126', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
        { name: 'Jerome Bell', phone: '(629) 555-0129', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
        { name: 'Kathryn Murphy', phone: '(406) 555-0120', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
        { name: 'Jacob Jones', phone: '(208) 555-0112', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Active' },
        { name: 'Kristin Watson', phone: '(704) 555-0127', startDate: '12/7/2022', endDate: '12/7/2022', car: 'Nissan GT-R', status: 'Inactive' },
      ];
      return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>End Date</TableCell>
                    <TableCell>Type of Car</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {customers.map((customer, index) => (
                    <TableRow key={index}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.startDate}</TableCell>
                    <TableCell>{customer.endDate}</TableCell>
                    <TableCell>{customer.car}</TableCell>
                    <TableCell>{customer.status}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
      );


}



export default DashBoardCustomerCar;