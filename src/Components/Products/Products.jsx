import axios from 'axios';
import React from 'react';
import './Products.scss';
import '../../Components/Card/Card.scss';
import Card from '../../Components/Card/Card.jsx';

class Products extends React.Component {
    state = {
        items: [],
    };
    componentDidMount() {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
            .then((res) => {
                this.setState({
                    items: res.data,
                });
            });
    }
    render() {
        return (
            <div>
                {this.state.items.map((item) => (
                    <div className='products'>
                        <div className='productItems'>
                            <Card src={item.image_link}
                                text={item.name}
                                price={item.price} />
                        </div>
                    </div>
                ))
                }
            </div>
        );
    }
}

export default Products;