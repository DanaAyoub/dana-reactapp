import React , {createContext} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import ShoppingCart from './Pages/ShoppingCart.jsx';
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { contextProvider } from './context';
import './App.scss';

const history = createBrowserHistory({});

const App = () => {

  return (
    <div className="App">
       <contextProvider>
      <Header/>
      <Router history={history}>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/ShoppingCart" component={ShoppingCart} />
      </Router>
      <Footer />
      </contextProvider>
    </div>
  );
}

export default App;
