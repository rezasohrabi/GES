import { Button, Grid } from '@material-ui/core';
import React from 'react';

const LoadMore = ({
    onLoadMore = () => {}
}) => {
    return (
        <Grid container item justify='center'>
            <Button
            variant='contained'
            color='secondary'
            onClick={() => onLoadMore()}
            >Load More</Button>
        </Grid>
    )
}

export default LoadMore;