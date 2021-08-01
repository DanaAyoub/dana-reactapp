import './App.scss';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({});

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route path="/" component={LandingPage}/>
      </Router> 
    </div>
  );
}

export default App;

