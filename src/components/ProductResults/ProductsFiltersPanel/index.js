import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Slider, makeStyles, Grid } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import RadioButtonPanel from '../../FormPanel/RadioButtonPanel';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: theme.spacing(2),
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
}));

function priceRangeValueText(val) {
    return `${val}$`
}

const ProductsFiltersPanel = (
{
    filters: {
        sizes,
        colours,
        brands,
        prices,
    }
}) => {
    const max = isFinite(Math.max(...prices))? Math.max(...prices) : 100;
    const min = isFinite(Math.min(...prices))? Math.min(...prices) : 0;
    const [expended, setExpended] = useState(false);
    const [priceRange, setPriceRange] = useState([min, max]);
    const [colour, setColour] = useState('');
    const [size, setSize] = useState('');
    const [brand, setBrand] = useState('');
    const classes = useStyles();

    const handleExpand = (panel) => (event, isExpended) => {
        setExpended(isExpended? panel : false);
    }

    return (
        <Grid className={classes.root}>
            <Accordion expanded={expended === 'brandPanel'} onChange={handleExpand('brandPanel')}>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="brand accordion"
                id="brandAccordion"
                >
                    <Typography className={classes.heading}>Brand</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RadioButtonPanel
                    value={brand}
                    name='brands'
                    onChange={event => setBrand(event.target.value)}
                    radios={Object.entries(brands)}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expended === 'sizePanel'} onChange={handleExpand('sizePanel')}>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="size accordion"
                id="sizeAccordion"
                >
                    <Typography className={classes.heading}>Size</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RadioButtonPanel
                    value={size}
                    name='sizes'
                    onChange={event => setSize(event.target.value)}
                    radios={Object.entries(sizes)}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expended === 'colourPanel'} onChange={handleExpand('colourPanel')}>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="colour accordion"
                id="colourAccordion"
                >
                    <Typography className={classes.heading}>Colour</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RadioButtonPanel 
                    value={colour} 
                    name='colours'
                    onChange={event => setColour(event.target.value)}
                    radios={Object.entries(colours)}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expended === 'pricePanel'} onChange={handleExpand('pricePanel')}>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="price accordion"
                id="priceAccordion"
                >
                    <Typography className={classes.heading}>Price</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Slider
                    value={priceRange}
                    onChange={(event, newValue) => setPriceRange(newValue)}
                    valueLabelDisplay="auto"
                    marks={prices}
                    min={min}
                    max={max}
                    step={5}
                    aria-labelledby="price-range-slider"
                    getAriaValueText={priceRangeValueText}
                    />  
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
};

export default ProductsFiltersPanel;