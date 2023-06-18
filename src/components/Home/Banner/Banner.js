import { Container, styled } from '@mui/material';
import React from 'react';

const Banner = () => {

    const RootStyle = styled('div')(({ theme }) => ({
        paddingTop: theme.spacing(15),
        [theme.breakpoints.up('md')]: {
          paddingBottom: theme.spacing(15),
        },
      }));

    return (
        <RootStyle>
            <Container maxWidth="lg">
                <h1>banner</h1>
                this is banner section
            </Container>
         
        </RootStyle>
    );
};

export default Banner;