import React from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login')
    }

    const handleLogo = () => {
        navigate('/')
    }

    const Logout = () => {
        sessionStorage.removeItem("token")
        alert("Logout")
        navigate('/login')
    }

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, background: '#003580' }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography onClick={handleLogo} variant="h6" color="inherit" fontWeight={'bold'} noWrap sx={{ flexGrow: 1 }}>
                    Traveler.com
                </Typography>
                <nav>
                    <Link
                        to='/viewhotels'
                        style={{ color: 'white', textDecoration: 'none', margin: '0.5rem' }}
                    >
                        View Hotels
                    </Link>
                    {token != null ?
                        <Link
                            to='/mybooking'
                            style={{ color: 'white', textDecoration: 'none', marginTop: 1, margin: '0.5rem' }}
                        >
                            View Bookings
                        </Link> : <>
                        </>}
                    <Link
                        to='/'
                        style={{ color: 'white', textDecoration: 'none', margin: '0.5rem', marginRight: '2rem' }}
                    >
                        About US
                    </Link>
                </nav>
                {token == null ?
                    <Button variant="contained" startIcon={<LoginIcon />} sx={{ my: 1, mx: 1.5 }} onClick={goToLogin}>
                        Login
                    </Button> :
                    <Button variant="contained" startIcon={<LoginIcon />} sx={{ my: 1, mx: 1.5 }} onClick={Logout}>
                        Logout
                    </Button>}
            </Toolbar>
        </AppBar>

    )
}

export default Header