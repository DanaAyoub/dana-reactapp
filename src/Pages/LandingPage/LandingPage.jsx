import React, { useState } from 'react';
import Announcment from '../../Components/Announcment/Announcment.jsx';
import Products from '../../Components/Products/Products.jsx';
import Suggested from '../../Components/Suggested/Suggested.jsx';
import { getAllProducts } from '../../services/Products.service.js';

const LandingPage = () => {

    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    React.useEffect(() => {
        getAllProducts().then((response) => {
            setProducts(response);
        });
    }, []);

    const onAddToCartHandler = (product) => {
        setSelectedProducts([...selectedProducts, product]);
        console.log(product);
    }

    return (
        <div>
            <Announcment />
            <Suggested />
            <Products products={products}
                onAddToCartHandler={onAddToCartHandler}
                selectedProducts={selectedProducts} />
        </div>
    );
}

export default LandingPage;