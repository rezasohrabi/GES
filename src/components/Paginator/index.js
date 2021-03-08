import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',        
    },
}));

const Paginator = ({card, ...otherProps}) => {
    const classes = useStyles();
    return (
        <>
            {card? 
            <Card className={classes.root}>
                <Pagination {...otherProps}  showFirstButton showLastButton />
            </Card>
             : <Pagination {...otherProps}  showFirstButton showLastButton />
            }
        </> 
    );
};

export default Paginator;