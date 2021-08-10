import React, { useState } from 'react';
import './Products.scss';
import '../../Components/Card/Card.scss';
import Card from '../../Components/Card/Card.jsx';
import { getAllProducts } from '../../services/Products.service';

const Products = () => {

    const [products, setProducts] = useState([]);
    React.useEffect(async () => {
        const response = await getAllProducts();
        setProducts(response);
    }, []);

    return (
        <div>
            {
                products.map((item) => {
                    return (
                        <div className='Products'>
                            <div className='productItems'>
                                <Card src={item.image_link}
                                    text={item.name}
                                    price={item.price} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Products;