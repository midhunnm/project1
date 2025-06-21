import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <div class="login">
            <TextField id="standard-basic" label='Email' variant="standard" /><br /><br />
            <TextField id="standard-basic" label='Password' type='password' variant="standard" /><br /><br />
            <Button variant="outlined">Login</Button><br />
        </div>
    )
}

export default Login
