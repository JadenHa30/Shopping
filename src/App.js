import React from 'react';
import './App.css';
import AllProducts from './components/client/AllProducts';
import ShoppingAdmin from './components/admin/ShoppingAdmin';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/admin/Login';
import ProductDetail from './components/client/ProductDetail';


function App() {
  return (
    <Router>
      <div>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
