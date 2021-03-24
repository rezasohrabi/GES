import { createSelector } from 'reselect';

export const getProductsData = state => state.productsData;

export const selectProducts = createSelector(
    [getProductsData],
    productsData => productsData.filteredProducts.data
);

export const selectFilters = createSelector(
    [selectProducts],
    data => {
        const filters = {
            colours: {}, 
            sizes: {}, 
            brands: {}, 
            prices: [],
        };

        data && data.forEach((product) => {  
            const { colours, sizes, brands, prices } = filters;
            const { productColour, productSize, productBrand, productPrice } = product;
            
            if(productBrand) {
                if(!brands.hasOwnProperty(productBrand)) 
                brands[productBrand] = 1;    
                else
                    brands[productBrand] += 1;
            } 

            if(productPrice && !prices.includes(productPrice))
                prices.push(parseInt(productPrice))

            for(const clr of productColour) {
                if(!colours.hasOwnProperty(clr)) {
                    colours[clr] = 1;
                    continue;
                }
                colours[clr] += 1;
            }

            for(const s of productSize) {
                if(!sizes.hasOwnProperty(s)) {
                    sizes[s] = 1;
                    continue;
                }
                sizes[s] += 1;
            }
        });
        return filters;
    }
);
