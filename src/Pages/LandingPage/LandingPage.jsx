import React, { useState } from 'react';
import Header from '../../Components/Header/Header.jsx';
import Announcment from '../../Components/Announcment/Announcment.jsx';
import Products from '../../Components/Products/Products.jsx';
import Suggested from '../../Components/Suggested/Suggested.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { getAllProducts } from '../../services/Products.service.js';

const LandingPage = () => {
    const [products, setProducts] = useState([]);

    React.useEffect(() => {
        getAllProducts().then((response) => {
            setProducts(response);
        });
    }, []);

    return (
        <div>
            <Header />
            <Announcment />
            <Suggested />
            <Products products={products}/>
            <Footer />
        </div>
    );
}

export default LandingPage;