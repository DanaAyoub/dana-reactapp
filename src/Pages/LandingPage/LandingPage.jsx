import React from 'react';
import Header from '../../Components/Header/Header.jsx';
import Announcment from '../../Components/Announcment/Announcment.jsx';
import Products from '../../Components/Products/Products.jsx';
import Suggested from '../../Components/Suggested/Suggested.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Announcment />
            <Suggested />
            <Products />
            <Footer />
        </div>
    );
}

export default LandingPage;