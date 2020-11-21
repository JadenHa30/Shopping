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
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function App() {
  const initialState = {
    cart: []
  };
  
  const root_reducer = (state = initialState, action) => {
    if(action.type === "ADD_TO_CART"){
      const exist = state.cart.findIndex(product=> product.id === action.payload.id)
      let new_cart=[];
      if(exist < 0){
        new_cart = [
          ...state.cart,
          action.payload
        ]
      }else{
        new_cart = [...state.cart];
        new_cart[exist].quantity = new_cart[exist].quantity + action.payload.quantity;
      }
      return {
        ...state,
        cart: new_cart
      }
    }
    return state;
  }

  const store = createStore(
    root_reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
