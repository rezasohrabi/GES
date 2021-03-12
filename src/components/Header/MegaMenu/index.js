import React from 'react';
import { Button, Grid, makeStyles, MenuItem, MenuList, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const categories = {
    men: [
        {name: 'Coords', image: 'https://www.next.co.uk/nxtcms/resource/blob/3942942/fb6c8cdf3247fc0ef4b01459748d09c1/marvin-data.jpg'},
        {name: 'Jackets & Coats', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/522737.jpg'},
        {name: 'Jeans', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/530205.jpg'},
        {name: 'Joggers', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/945642.jpg?X56'},
        {name: 'Jumpers & Cardigans'},
        {name: 'Loungewear'},
        {name: 'Pyjamas & Nightwear'},
        {name: 'Shorts & Swimwear'},
        {name: 'Socks'},
        {name: 'Sportswear'},
        {name: 'Suits'},
        {name: 'Sweatshirts & Hoodies'},
        {name: 'Trousers & Chinos'},
        {name: 'T-Shirts & Polos'},
        {name: 'Underwear'},
    ],
    women: [
        {name: 'Blouses & Shirts', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/808546.jpg'},
        {name: 'Coats & Jackets', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/131067.jpg'},
        {name: 'Dresses', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/977651.jpg?X56'},
        {name: 'Hoodies & Sweatshirts', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/671991.jpg?X56'},
        {name: 'Jeans'},
        {name: 'Jumpers & Cardigans'},
        {name: 'Jumpsuits & Playsuits'},
        {name: 'Loungewear'},
        {name: 'Shorts'},
        {name: 'Skirts'},
        {name: 'Sportswear'},
        {name: 'Suits & Workwear'},
        {name: 'Swim & Beachwear'},
        {name: 'Tops & T-Shirts'},
        {name: 'Trousers'},
    ],
    boys: [
        {name: 'Babygrows & Sleepsuits', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/330902.jpg?X56'},
        {name: 'Bodysuits & Vests', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/939963.jpg?X56'},
        {name: 'Coats & Jackets', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/960757.jpg?X56'},
        {name: 'Jeans', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/187325.jpg?X56'},
        {name: 'Knitwear'},
        {name: 'Nightwear & Pyjamas'},
        {name: 'Schoolwear'},
        {name: 'Sets & Co-ords'},
        {name: 'Shirts'},
        {name: 'Shorts'},
        {name: 'Sleep Bags'},
        {name: 'Socks'},
        {name: 'Sportswear'},
        {name: 'Suits & Waistcoats'},
        {name: 'Sweatshirts & Hoodies'},
        {name: 'Swim & Beach'},
        {name: 'Tops, T-Shirts & Polos'},
        {name: 'Tracksuits'},
        {name: 'Trousers & Chinos'},
        {name: 'Underwear'},
    ],
    girls: [
        {name: 'Babygrows & Sleepsuits', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/251140.jpg?X56'},
        {name: 'Bodysuits & Vests', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/649881.jpg?X56'},
        {name: 'Coats & Jackets', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/651720.jpg?X56'},
        {name: 'Dresses', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/975058.jpg?X56'},
        {name: 'Jeans'},
        {name: 'Jumpsuits & Playsuits'},
        {name: 'Knitwear'},
        {name: 'Nightwear & Pyjamas'},
        {name: 'Schoolwear'},
        {name: 'Sets & Outfits'},
        {name: 'Shorts & Skirts'},
        {name: 'Sleep Bags'},
        {name: 'Socks & Tights'},
        {name: 'Sportswear'},
        {name: 'Sweatshirts & Hoodies'},
        {name: 'Swim & Beach'},
        {name: 'Tops, T-Shirts & Shirts'},
        {name: 'Trousers & Leggings'},
    ],
    baby: [
        {name: 'Accessories', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/934296.jpg?X56'},
        {name: 'Babygrows & Sleepsuits', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/411534.jpg?X56'},
        {name: 'Bodysuits & Vests', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/928252.jpg?X56'},
        {name: 'Coats, Jackets & Pramsuits', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/546013.jpg?X56'},
        {name: 'Dresses'},
        {name: 'Hats & Scratch Mitts'},
        {name: 'Joggers'},
        {name: 'Knitwear & Jumpers'},
        {name: 'Rompersuits & Dungarees'},
        {name: 'Sets & Coords'},
        {name: 'Swim & Beach'},
    ]
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        left: 0,
        right: 0,
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        display: 'none',
        padding: theme.spacing(2),
        transition: theme.transitions.create([], {
            duration: theme.transitions.duration.standard,
        }),
        '&:hover': {
            display: 'flex',
        }
    },
    menuList: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '60vh'
    },
    categoryItem: {
        padding: theme.spacing(2),
    },
    categoryImage: {
        width: '100%',
        height: '11rem',
    },
}));

const MegaMenu = ({category, ...otherProps}) => {
    const categoryList = categories[category];
    const classes = useStyles();
    return (
        <Grid container item direction='row' className={classes.root}>
            <Grid container item md={9}>
                <MenuList className={classes.menuList}>
                    {categoryList.map(category => (
                        <MenuItem>
                        <Typography variant='inherit'>{category.name}</Typography>
                        </MenuItem>
                    )
                    )}
                </MenuList>
            </Grid>
            <Grid container item md={3} justify='center'>
                {categoryList.slice(0, 4).map(category => (
                    <Grid container item direction='column' md={6} className={classes.categoryItem}>
                        <Link color='inherit'>
                        <img src={category.image} title={category.name} className={classes.categoryImage}/>
                        <Typography variant='inherit'>{category.name}</Typography> 
                        </Link>
                    </Grid>
                ))}
                <Button variant='outlined' color='primary'>The {category} Shop</Button>
            </Grid>
        </Grid>
    )
}

export default MegaMenu;