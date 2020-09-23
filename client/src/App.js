import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/">
            <Fib />
          </Route>
          <Route path="/otherpage">
            <OtherPage />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
