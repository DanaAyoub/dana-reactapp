import React from 'react';
import './Announcment.scss';
import announcment from '../../assets/makeup.jpg';

const Announcment = () => {
    return (
        <div className='Announcment'>
            <h1 className='Announcment__title'>
                Maybelline All you need of makeup products!
            </h1>
            <img className="Announcment__img" alt="announcment" src={announcment} />
        </div>
    );
}

export default Announcment;

