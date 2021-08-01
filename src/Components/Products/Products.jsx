import React from 'react';
import './Products.scss';

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({
                    items: result,
                });
            });
    }
    render() {
        const { items } = this.state;
        console.log(items.brand)
        return (
            <div className='Products'>
                {items.map((user, i) => (
                    <div >
                        <img src={user.image_link} alt='produscts'></img>
                        <h4>{user.name}</h4>
                        <h4>{user.brand}</h4>
                        <h4>{user.price}</h4>
                        <button className='Products__button'>Buy Now</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Products;