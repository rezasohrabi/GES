import React, { useState } from 'react';
import { 
    Button,
    Card, 
    CardContent, 
    CardHeader, 
    FormControl, 
    Grid, 
    InputLabel, 
    makeStyles, 
    MenuItem, 
    Select, 
    TextField, 
    } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: theme.spacing(3),
    },
    grid: {
        '& > *': {
            marginBottom: theme.spacing(2)
        },
    },
    button: {
        alignSelf: 'flex-start',
    },
}));

const Category = props => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryIamge, setCategoryImage] = useState('');
    const [categoryMenu, setCategoryMenu] = useState('');

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
            <Card className={classes.root}>
                <CardHeader
                title='Create New Category'
                />
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Grid 
                        container 
                        item 
                        direction='column' 
                        className={classes.grid}
                        >
                            <TextField
                            name='categoryName'
                            value={categoryName}
                            onChange={e => setCategoryName(e.target.value)}
                            label='Name'
                            required
                            />
                            <TextField
                            name='category'
                            value={categoryIamge}
                            type='Url'
                            onChange={e => setCategoryImage(e.target.value)}
                            label='Image Url'
                            required
                            />
                            <FormControl>
                                <InputLabel >Which Menu?</InputLabel>
                                <Select
                                value={categoryMenu}
                                onChange={e => setCategoryMenu(e.target.value)}
                                required
                                >
                                    <MenuItem value=''>Select Menu</MenuItem>
                                    <MenuItem value='men'>Men</MenuItem>
                                    <MenuItem value='women'>Women</MenuItem>
                                    <MenuItem value='boys'>Boys</MenuItem>
                                    <MenuItem value='girls'>Girls</MenuItem>
                                    <MenuItem value='baby'>Baby</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                            type='submit'
                            variant='outlined'
                            color='secondary'
                            className={classes.button}
                            >Create</Button>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
    )
}

export default Category;
