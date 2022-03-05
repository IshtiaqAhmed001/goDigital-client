import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';

const Orders = () => {
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://floating-lowlands-12971.herokuapp.com/orders?email=${user.email}`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email, token])

    return (
        <div>
            <h1>Orders: {orders.length}</h1>

            <TableContainer component={Paper}>
                <Table aria-label="Orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date Ordered</TableCell>
                            <TableCell align="right">Ordered Package</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.orderDate}
                                </TableCell>
                                <TableCell align="right">{row.packageName}</TableCell>
                                <TableCell align="right">{row.userName}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">action</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Orders;