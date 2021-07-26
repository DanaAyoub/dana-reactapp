import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Announcment from './Components/Announcment/Announcment';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Suggested from './Components/Suggested/Suggested';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Router >
        <Route path="/" component={App}>
          <Route path="/announcment" component={Announcment} />
          <Route path="/header" component={Header} />
          <Route path="/footer" component={Footer} />
          <Route path="/suggested" component={Suggested} />
          <Route path="/products" component={Products} />
        </Route>
      </Router> 
    </div>
  );
}

export default App;

