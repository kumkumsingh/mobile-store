import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NabBar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'

function App() {
  return (
    // React Fragment helps in simulating the html tag
  <React.Fragment>
  <NavBar></NavBar>
  <Switch> 
  <Route exact path="/" component={ProductList}></Route>
  <Route path="/details" component={Details}></Route>
  <Route path="/cart" component={Cart}></Route>
  <Route component={Default}></Route>
  </Switch>
  </React.Fragment>
  );
}

export default App;
