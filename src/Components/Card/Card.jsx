import React from 'react';
import './Card.scss';

function Card(props) {
    return (
        <div className='Card'>
            {/* <button className="btn-del">Delete</button> */}
            <img src={props.src}
                className='Card_img'
                alt='MakeUp products' />
            <div className='Card_info'>
                <h4 className='Card_text'> {props.text} </h4>
                <h4 className='Card_price'> {props.price} </h4>
                <button className='Card_btn'> Add to cart</button>
            </div>
        </div>
    )
}

export default Card;