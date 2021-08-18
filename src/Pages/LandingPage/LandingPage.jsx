import React, { useState , useContext } from 'react';
import Announcment from '../../Components/Announcment/Announcment.jsx';
import Products from '../../Components/Products/Products.jsx';
import Suggested from '../../Components/Suggested/Suggested.jsx';
import { getAllProducts } from '../../services/Products.service.js';
import { AppContext } from '../../context.js';
import ShoppingCart from '../ShoppingCart.jsx';

// export const AppContext = React.createContext();

const LandingPage = () => {

    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    // const { test } = useContext(AppContext);
    // const { dispatch, report } = useContext(AppContext);

    // React.useEffect(() => {
    //     const asyncPost = async () => {
    //       const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline', {
    //         method: 'POST',
    //       });
    
    //       const payload = await response.json();

    //       dispatch({
    //         type: products.name,
    //         payload,
    //       });

    React.useEffect(() => {
        getAllProducts().then((response) => {
            setProducts(response);
        });
    }, []);

    const onAddToCartHandler = (product) => {
        setSelectedProducts([...selectedProducts, product]);
        console.log(product);
        // <ShoppingCart dana={product}/>
        // console.log(product);
    }

    return (
        <div>
            <Announcment />
            <Suggested />
            <Products products={products} onAddToCartHandler={onAddToCartHandler} selectedProducts={selectedProducts} />
        </div>
    );
}

export default LandingPage;