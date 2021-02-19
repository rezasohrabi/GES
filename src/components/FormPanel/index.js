import React from 'react';
import { Avatar, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(8),
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        margin: theme.spacing(1),
    },
}));

const FormPanel = props => {

    const { title, children, icon } = props;
    const classes = useStyles();

    return (
        <Container component='main' maxWidth='xs'>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {icon}
                </Avatar>
                <Typography variant='h5'>
                    {title}
                </Typography>
                { children }
            </div>
        </Container>
    );

}

export default FormPanel