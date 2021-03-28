import { 
    IconButton,
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableRow,
    makeStyles, 
    } from '@material-ui/core';
import { Close, Remove } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    image: {
        height: '100px',
    }
}));

const CategoryList = ({categories, onRemove, ...otherProps}) => {
    const classes = useStyles();
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <strong>Categories</strong>
                    </TableCell>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell>
                        Menu
                    </TableCell>
                    <TableCell>
                        Remove
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {categories.map(category => {
                    const { categoryId, categoryName, categoryIamge, categoryMenu } = category;
                    return (
                    <TableRow key={categoryId}>
                        <TableCell>
                            <img className={classes.image} src={categoryIamge} alt={categoryName} />
                        </TableCell>
                        <TableCell>
                            {categoryName}
                        </TableCell>
                        <TableCell>
                            {categoryMenu}
                        </TableCell>
                        <TableCell>
                            <IconButton color='secondary' onClick={e => onRemove(categoryId)}>
                                <Close />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    )}
                )}
            </TableBody>
        </Table>
    );
};

export default CategoryList;
