import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
    return (
        <div class="signup">
            <TextField id="standard-basic" label='Username'  variant="standard" /><br /><br />
            <TextField id="standard-basic" label='Email' variant="standard" /><br /><br />
            <TextField id="standard-basic" label='password' type='password' variant="standard" /><br /><br />
            <TextField id="standard-basic"label=' confirm password' type='password ' variant="standard" /><br /><br />
            <Button variant="outlined">SIGNUP</Button><br />
        </div>
    )
}

export default Signup