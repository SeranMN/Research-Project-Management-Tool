import React from 'react'
import { AppBar, Box, Typography } from '@mui/material'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import IconButton from '@mui/material/IconButton';

const Footer = () => {
    const footers = [
        {
            title: 'Company',
            description: ['View Hotels', 'About', 'Contact us'],
        },

        {
            title: 'Resources',
            description: ['FacebookIcon', 'Resource name', 'Another resource', 'Final resource'],
        }

    ];

    return (
        <div style={{background:'#3949ab'}}>
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],

                }}
            >
                <Typography variant="body2" color="white" align="center" >
                    {'Copyright © '}
                    <Link color="inherit">
                        Traveler.com
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>

            </Container>
        </div>

    )
}

export default Footer