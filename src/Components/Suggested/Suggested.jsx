import React from 'react';
import './Suggested.scss';

const Suggested = () => {
    return (
        <div classname='suggested'>
            <card classname='card'>
                <h2>Beauty Cream</h2>
                <img className="Bcream" alt="BCream" src={'./assets/natural.jpg'} />
                <button classname='beautyButton'>View all</button>
            </card>
            <card classname='card'>
                <h2>Hair Cream</h2>
                <img className="Hcream" alt="HCream" src={'./assets/natural.jpg'} />
                <button classname='hairButton'>View all</button>
            </card>
        </div>
    );
}

export default Suggested;