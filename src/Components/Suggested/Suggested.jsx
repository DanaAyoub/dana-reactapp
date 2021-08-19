import React from 'react';
import face from '../../assets/face.jpg';
import eyes from '../../assets/eyes.jpg';
import lips from '../../assets/lips.jpg';
import './Suggested.scss';

const Suggested = () => {

    return (
        <div className='Suggested'>
            <div className='Suggested__card'>
                <h2>
                    Face
                </h2>
                <img className="Suggested__image"
                    alt="BCream" src={face} />
                <button className='Suggested__button'>
                    View all
                </button>
            </div>
            <div className='Suggested__card'>
                <h2>
                    Eyes
                </h2>
                <img className="Suggested__image"
                    alt="HCream"
                    src={eyes} />
                <button className='Suggested__button'>
                    View all
                </button>
            </div>
            <div className='Suggested__card'>
                <h2>
                    Lips
                </h2>
                <img className="Suggested__image"
                    alt="HCream"
                    src={lips} />
                <button className='Suggested__button'>
                    View all
                </button>
            </div>
        </div>
    );
}

export default Suggested;