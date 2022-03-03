import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [successMsg, setSuccessMsg] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://floating-lowlands-12971.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccessMsg(true);
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <h1>Make and admin!</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button sx={{ backgroundColor: 'black' }} size='large' type="submit" variant="contained">Make Admin</Button>
            </form>
            {successMsg && <Alert severity="success">Made Admin Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;