import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableRow 
    } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    height: 100px; 
`



const CategoryList = ({categories, ...otherProps}) => {
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
                </TableRow>
            </TableHead>
            <TableBody>
                {categories.map(category => (
                    <TableRow>
                        <TableCell>
                            <StyledImage src={category.categoryIamge} alt={category.categoryName} />
                        </TableCell>
                        <TableCell>
                            {category.categoryName}
                        </TableCell>
                        <TableCell>
                            {category.categoryMenu}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default CategoryList;
