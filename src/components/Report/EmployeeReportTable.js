import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
  } from '@mui/material'
  import moment from 'moment'

const EmployeeReportTable = ({ data }) => {
  return (
    <TableContainer sx={{ maxHeight: '300px' }} component={Paper}>
    <Table stickyHeader aria-label='simple table'>
      <TableHead>
        <TableRow>
          <TableCell>uanNumber</TableCell>
          <TableCell>esicIpNumber</TableCell>
          <TableCell>Employee Name</TableCell>
          <TableCell>Father Name</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Marital Status</TableCell>
          <TableCell>Date Of Birth</TableCell>
          <TableCell>Date Of Joining</TableCell>
          <TableCell>Contact Number</TableCell>
          <TableCell>Bank Account Number</TableCell>
          <TableCell>Aadhar Card Number</TableCell>
          <TableCell>Nominee Name</TableCell>
          <TableCell>Rest</TableCell>
          <TableCell>Calculation</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(row => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {}
            <TableCell>{row?.uanNumber}</TableCell>
            <TableCell>{row?.esicIpNumber}</TableCell>
            <TableCell>{row?.employeeName}</TableCell>
            <TableCell>{row?.fatherName}</TableCell>
            <TableCell>{row?.gender}</TableCell>
            <TableCell>{row?.maritalStatus}</TableCell>
            <TableCell>{moment(row?.dateOfBirth).format('DD-MM-YYYY')}</TableCell>
            <TableCell>{moment(row?.dateOfJoining).format('DD MM YYYY')}</TableCell>
            <TableCell>{row?.contactNumber}</TableCell>
            <TableCell>{row?.accountNumber}</TableCell>
            <TableCell>{row?.aadharNumber}</TableCell>
            <TableCell>{row?.nomineeName}</TableCell>
            <TableCell>{row?.rest}</TableCell>
            <TableCell>{row?.calculation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default EmployeeReportTable;
