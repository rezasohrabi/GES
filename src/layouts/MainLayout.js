import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './../components/Header';
import Footer from './../components/Footer';

const MainLayout = props => {
    return (
        <Grid container>
            <Header />
            <Grid container item>
                {props.children}
            </Grid>
            <Footer />
        </Grid>
    )
};

export default MainLayout;