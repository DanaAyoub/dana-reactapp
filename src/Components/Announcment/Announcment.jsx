import React, { useState } from 'react';
import './Announcment.scss';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { Data } from './Data.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Announcment = (props) => {

    const [value, setValue] = useState(0);

    const prev = () => {
        value === 0 ? setValue(value + 1) : setValue(0)
    }

    const next = () => {
        value >= 2 ? setValue(0) : setValue(value + 1)
    }

    setTimeout(next, 3000)

    return (

        <div className="Announcment">
            <h1 className='Announcment__title'>
                Maybelline All you need of makeup products!
            </h1>
            <img className='Announcment__img' src={Data[value].image}
                alt={Data[value].text}
                key={Data[value].index} />
            <div>
                <button className="Announcment__button"
                    onClick={prev}>
                    <BsArrowLeft />
                </button>
                <button className="Announcment__button"
                    onClick={next}>
                    <BsArrowRight />
                </button>
            </div>
        </div>
    );
}

export default Announcment;
