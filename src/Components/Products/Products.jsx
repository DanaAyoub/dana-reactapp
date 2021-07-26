import React from 'react';
import './Products.scss';
import Card from '../Card/Card.jsx';

const Products = () => {
    return (
        <div>
            <div classname='item'>
                <img className="cream1" src={'./assets/spray.jpeg'} />
                <div classname='description'> A rich moisturising and hydrating lotion which is packed full of natural oils and extracts including sea buckthorn which is well-known for its rejuvenating properties</div>
            </div>
            <div classname='item'>
                <img className="cream2" src={'./assets/butter.jpeg'} />
                <div classname='description'> Pamper your body with this fusion of fruits in a rich nourishing cream containing Shea Butter, Cocoa Butter, Avocado Oil and Jojoba Oil to moisturise; enhanced by natural Mango Extract to cool and soothe the skin</div>
            </div>
        </div>
    );
}

export default Products;