import React from 'react';
import { Select, MenuItem, makeStyles, InputLabel } from '@material-ui/core';
import countryList from 'react-select-country-list';

const useStyles = makeStyles((theme) => ({
    label: {
        marginTop: theme.spacing(2),
    },
}));

const SelectCountry = ({value, onChange, label, ...otherProps}) => {

    const classes = useStyles();
    console.log(countryList())
    const countryData = countryList().getData();

    return (
    <>
        <InputLabel className={classes.label} id='countryLabel'>{label}</InputLabel>
        <Select 
        labelId='countryLabel'
        name='country'
        value={value}
        onChange={onChange}
        {...otherProps}
        >
            {countryData.map(country => {
                const { value, label } = country;
                return <MenuItem
                        key={value}
                        value={value}
                        >{label}
                        </MenuItem>
            })}
        </Select>
    </>
    )
}

export default SelectCountry;
