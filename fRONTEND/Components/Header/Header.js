import React from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();



    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, background: '#003580' }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography  variant="h6" color="inherit" fontWeight={'bold'} noWrap sx={{ flexGrow: 1 }}>
                    Research Project Management Tool
                </Typography>
                <nav>
                    <Link
                        to='/'
                        style={{ color: 'white', textDecoration: 'none', margin: '0.5rem' }}
                    >
                        Home
                    </Link>

                    <Link
                        to='/supervisors'
                        style={{ color: 'white', textDecoration: 'none', marginTop: 1, margin: '0.5rem' }}
                    >
                        Supervisors
                    </Link>
                    <Link
                        to='/chat'
                        style={{ color: 'white', textDecoration: 'none', margin: '0.5rem', marginRight: '2rem' }}
                    >
                        Chat
                    </Link>
                    <Link
                        to='/submissiondashboard'
                        style={{ color: 'white', textDecoration: 'none', margin: '0.5rem', marginRight: '2rem' }}
                    >
                        Submissions
                    </Link>
                    <Link
                        to='/templates'
                        style={{ color: 'white', textDecoration: 'none', margin: '0.5rem', marginRight: '2rem' }}
                    >
                        Templates
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>

    )
}

export default Header