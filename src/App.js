import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import ShoppingCart from './Pages/ShoppingCart.jsx';
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import './App.scss';
import ProductsContext from './Context/products.context';

const history = createBrowserHistory({});

const App = () => {
  const [products, setProducts] = React.useState([]);

  return (
    <div className="App">
      <ProductsContext.Provider value={{ products, setProducts }}>
        <Header />
        <Router history={history}>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/ShoppingCart" component={ShoppingCart} />
        </Router>
        <Footer />
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
