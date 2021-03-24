import React from 'react';
import { RadioGroup, Radio, FormControlLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    radioGroup: {
        maxHeight: '25rem',
        width: '100%',
        overflowY: 'auto',
        flexWrap: 'nowrap',
    },
}));

const RadioButtonPanel = ({radios, value, onChange, name, ...otherProps}) => {
    const classes = useStyles();
    return(
        <RadioGroup className={classes.radioGroup}  aria-label="radios" value={value} onChange={onChange}>
            <FormControlLabel  
            value={''} 
            control={<Radio color='primary'/>} 
            label={`All ${name}`}
            />
            {radios.map((radio, index) => {
                return <FormControlLabel key={index} 
                        value={radio[0]} 
                        control={<Radio color='primary'/>} 
                        label={`${radio[0]} (${radio[1]})`} 
                        />
            })}
        </RadioGroup>
    )
}

export default RadioButtonPanel;