import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import './App.scss';

const history = createBrowserHistory({});
const App = () => {

  return (
    <div className="App">
      <Header/>
      <Router history={history}>
        <Route path="/" component={LandingPage}/>
      </Router> 
      <Footer/>
    </div>
  );
}

export default App;
