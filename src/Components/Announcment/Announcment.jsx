import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Announcment.scss';
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { Data } from './Data.jsx';

const Announcment = () => {
    const [value, setValue] = useState(0);

    return (
        <>
       <div className="Announcment">
                <h1 className='Announcment__title'>
                    Maybelline All you need of makeup products!
                </h1>
                <img src={Data[value].image} alt={Data[value].text} key={Data[value].index} />
                <div>
                    <button className="Announcment__button" onClick={() => value === 0 ? setValue(3) : setValue(value - 1)}><BsArrowLeft /></button>
                    <button className="Announcment__button" onClick={() => value === 3 ? setValue(0) : setValue(value + 1)}><BsArrowRightShort /></button>
                </div>
            </div>
 
        </>
    );
}

ReactDOM.render(
    <Announcment />,
    document.getElementById('root')
);

export default Announcment;
