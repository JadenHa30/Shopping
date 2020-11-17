import React from 'react';
import './App.css';
import AllProducts from './components/client/AllProducts';
import ShoppingAdmin from './components/admin/ShoppingAdmin';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/admin/Login';
import ProductDetail from './components/client/ProductDetail';
import Home from './components/client/Home';
import Cart from './components/client/Cart';
import NavbarClient from './components/client/NavbarClient';
import Footer from './components/client/Footer';


function App() {
  return (
    <Router>
      <div>
        <NavbarClient/>
        <Switch>
          <Route path="/admin/login">
            <Login/>
          </Route>
          <Route path="/admin">
            <ShoppingAdmin />
          </Route>

          <Route path="/products/:id">
            <ProductDetail/>
          </Route>
          <Route path="/products">
            <AllProducts />
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
