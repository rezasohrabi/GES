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

const configColourRadios = [
    {value: 'white', label: 'White'},
    {value: 'black', label: 'Black'},
    {value: 'red', label: 'Red'},
    {value: 'green', label: 'Green'},
    {value: 'grey', label: 'Grey'},
    {value: 'blue', label: 'Blue'},
    {value: 'pink', label: 'Pink'},    
];

const configSizeRadios = [
    {value: 'XS', label: 'X-Small'},
    {value: 'S', label: 'Small'},
    {value: 'M', label: 'Medium'},
    {value: 'L', label: 'Large'},
    {value: 'XL', label: 'X-Large'},
    {value: '2XL', label: 'XX-Large'},
]

const configBrandRadios = [
    {value: 'nike', label: 'Nike'},
    {value: 'adidas', label: 'Adidas'},
    {value: 'levis', label: 'Levis'},
    {value: 'gussi', label: 'Gucci'},
    {value: 'poloRalph', label: 'Polo Ralph Lauren'},
    {value: 'versace', label: 'Versace'},
    {value: 'calvin', label: 'Calvin Klein'},
    {value: 'american', label: 'American Eagle'},
    {value: 'aeropostale', label: 'Aeropostale'},
    {value: 'victoria', label: 'Abercrombie & Fitch'},
    {value: 'puma', label: 'Puma'},
    {value: 'vans', label: 'Vans'},
    {value: 'louis', label: 'Louis Vuitton'},
    {value: 'lacoste', label: 'Lacoste'},
    {value: 'tommy', label: 'Tommy Hilfiger'},
];

const ProductsFiltersPanel = prosp => {
    const [expended, setExpended] = useState(false);
    const [priceRange, setPriceRange] = useState([50, 100]);
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
                    onChange={event => setBrand(event.target.value)}
                    radios={configBrandRadios}
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
                    onChange={event => setSize(event.target.value)}
                    radios={configSizeRadios}
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
                    onChange={event => setColour(event.target.value)}
                    radios={configColourRadios}
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
                    aria-labelledby="price-range-slider"
                    getAriaValueText={priceRangeValueText}
                    />  
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
};

export default ProductsFiltersPanel;