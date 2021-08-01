import React from 'react';
import './Suggested.scss';
import face from '../../assets/face.jpg';
import eyes from '../../assets/eyes.jpg';
import lips from '../../assets/lips.jpg';
const Suggested = () => {
    return (
        <div className='Suggested'>
            <card className='Suggested__card'>
                <h2>Face</h2>
                <img className="Suggested__image" alt="BCream" src={face} />
                <button className='Suggested__button'>View all</button>
            </card>
            <card className='Suggested__card'>
                <h2>Eyes</h2>
                <img className="Suggested__image" alt="HCream" src={eyes} />
                <button className='Suggested__button'>View all</button>
            </card>
            <card className='Suggested__card'>
                <h2>Lips</h2>
                <img className="Suggested__image" alt="HCream" src={lips} />
                <button className='Suggested__button'>View all</button>
            </card>
        </div>
    );
}

export default Suggested;