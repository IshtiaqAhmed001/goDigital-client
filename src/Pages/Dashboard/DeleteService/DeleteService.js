import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Button, Grid } from '@mui/material';

const DeleteService = () => {
    const [services, setServices] = useState([]);
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        fetch('https://floating-lowlands-12971.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleDeleteBtn = (id) => {
        const url = `https://floating-lowlands-12971.herokuapp.com/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setSuccess(true);
                }
            })
    }

    return (
        <div>
            <h1>Total Services: {services.length}</h1>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>

                    <TableContainer component={Paper}>
                        <Table aria-label="Orders table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Service Name</TableCell>
                                    <TableCell align="left">Description</TableCell>
                                    <TableCell align="left">Thumbnail</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {services.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.description}</TableCell>
                                        <TableCell align="left">
                                            <img style={{ width: '100px', height: '100px' }} src={row.img} alt="" />
                                        </TableCell>
                                        {
                                            row.canDelete === 'no' && <TableCell align="left">
                                                <Button disabled >Delete</Button>
                                            </TableCell>
                                        }
                                        {
                                            row.canDelete === 'yes' && <TableCell align="left">
                                                <Button onClick={() => handleDeleteBtn(row._id)}>Delete</Button>
                                            </TableCell>
                                        }
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {success && <Alert severity="success">Service deleted successfully. Check homepage!</Alert>
                    }
                </Grid>
            </Grid>

        </div>
    );
};

export default DeleteService;