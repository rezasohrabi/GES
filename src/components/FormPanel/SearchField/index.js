import React from 'react';
import { Search } from '@material-ui/icons';
import { makeStyles, InputBase, fade } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.primary.light, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.primary.light, 0.25),
            transition: theme.transitions.create(
                ['background-color'],
                { duration: theme.transitions.duration.complex }
                ),
        },
    },
    searchInput: {
        width: '100%',
    },
    searchIcon: {
        margin: theme.spacing(1),
    },
    
}));

const SearchField = ({placeholder, fullWidth, ...otherProps}) => {
    const classes = useStyles();
    return (
        <div className={clsx(classes.root, 
            {[classes.searchInput]: fullWidth}
            )}>
            <Search color='inherit' className={classes.searchIcon}/>
            <InputBase
              placeholder={placeholder}
              className={classes.searchInput}
              inputProps={{ 'aria-label': 'search' }}
              {...otherProps}
            />
        </div>
    );
};

export default SearchField;
