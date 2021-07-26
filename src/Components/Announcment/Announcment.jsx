import React from 'react';
import './Announcment.scss';

const Announcment = () => {
    return (
        <div classname='announcment'>
            <h1 classname='descripe'>Natural Cosmatics Collection</h1>
            <img className="cream" alt="naturalCream" src={'./assets/cream.jpg'} />
            <h5>Here you can find all you want of 100% natural products for hair and skin</h5>
        </div>
    );
}

export default Announcment;