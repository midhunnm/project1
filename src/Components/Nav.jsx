import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div class="nav">
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
                    <Stack direction="row" spacing={2}>
                        <Link to='/login' >
                        <Button color='error' >Login</Button>
                        </Link>
                        &nbsp; &nbsp; &nbsp;
                        <Link to='/signup'>
                        <Button color='error' >Signup</Button>
                        </Link>
                    </Stack>
                </Toolbar>
            </AppBar>
            <br /><br /><br /><br />
        </div>
    )
}

export default Nav