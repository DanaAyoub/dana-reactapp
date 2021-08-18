import React from 'react';
import './Card.scss';

const Card = (props) => {

    return (
        <div className='Card'>
            <img src={props.src}
                className='Card_img'
                alt='MakeUp products' />
            <div className='Card_info'>
                <h4 className='Card_text'>
                    {props.text}
                </h4>
                <h4 className='Card_price'>
                    {props.price}
                </h4>
            </div>
        </div>
    )
}

export default Card;