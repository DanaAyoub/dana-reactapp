import React, { useState, useContext } from 'react';
import './Products.scss';
import '../../Components/Card/Card.scss';
import Card from '../../Components/Card/Card.jsx';
import { GiShoppingCart } from "react-icons/gi"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductsContext from '../../Context/products.context';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const Products = (props) => {

    const [count, setCount] = useState(0);
    const { products, setProducts } = useContext(ProductsContext)

    const addToCart = (product) => {
        setProducts([...products, product])
        props.onAddToCartHandler(product);
    }

    const handleIncrement = () => {
        setCount(count => count + 1);
    };

    const isAdded = (value) => {
        if (!props.selectedProducts || props.selectedProducts.length <= 0) {
            return false;
        }

        return props.selectedProducts.find((product) => product.id == value);
    }

    if (!props.products || props.products.length <= 0) {
        return null;
    }

    console.log(products)

    return (
        <div>
            {
                props.products.map((product) => {
                    return (
                        <div className='Products'
                            key={`${product.name}+${getRandomInt(10000)}`}>
                            <div className='productItems'>
                                <Link to={{ pathname: "/ShoppingCart" }} >
                                    <button className='Products__cart'>
                                        <GiShoppingCart className='Products__icon' />
                                        <p className='Products__counter'
                                            value={count}
                                            type='text'>
                                            {count} </p>
                                    </button>
                                </Link>
                                <Card src={product.image_link}
                                    text={product.name}
                                    price={product.price} />
                                <button className='Products__btn'
                                    disabled onClick={() => {
                                        addToCart(product);
                                        handleIncrement()
                                    }}
                                    value={product}
                                    disabled={isAdded(product.id)} >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );

}

export default Products;