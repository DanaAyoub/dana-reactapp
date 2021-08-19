import React, { useContext } from 'react';
import ProductsContext from '../Context/products.context';

const ShoppingCart = (props) => {
    const products = useContext(ProductsContext)
    console.log(products);

    return (
        null
    );
}

export default ShoppingCart;