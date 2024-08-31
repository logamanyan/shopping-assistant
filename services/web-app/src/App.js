import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import SunglassesPreview from './components/SunglassesPreview';
import ClothesPreview from './components/ClothesPreview';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/try/sunglasses">Try Sunglasses</Link>
            </li>
            <li>
              <Link to="/try/cloth">Try Clothes</Link>
            </li>
          </ul>
        </nav>

        {/* Route switching */}
        <Switch>
          <Route path="/try/cloth">
            <ClothesPreview />
          </Route>
          <Route path="/try/sunglasses">
            <SunglassesPreview />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;