import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@material-ui/core';

const StyledCard = styled.div`
    padding: 16px;
    margin: 16px;
    width: 100%;
`;

const StyledLink = styled(Link)`
  *:not(:last-child) {
    margin-bottom: 8px;
  } 
`;

const StyledImage = styled.img`
    height: 350px;
    width: 100%;
`;

export default function Item(product) {
    const {
        productId,
        productThumbnail,
        productName,
        productPrice
      } = product;
    return (
        <StyledCard>
          <StyledLink component={RouterLink} to={`/product/${productId}`} color='inherit'>
            <StyledImage src={productThumbnail} alt={productName}/>
            <Typography variant='body2'  noWrap>{productName}</Typography>
            <Typography variant='h6' color='primary'>${productPrice}</Typography>
          </StyledLink>
        </StyledCard>
    );
};
