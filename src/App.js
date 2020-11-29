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
import Checkout from './components/client/Checkout';
import Shopping from './components/admin/ShoppingAdmin';

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
          {
            ...action.payload,
            id_cart: Date.now()
          }
        ]
      }else{
        new_cart = [...state.cart];
        new_cart[exist].quantity = new_cart[exist].quantity + action.payload.quantity;
      }
      return {
        ...state,
        cart: new_cart
      }
    }else if(action.type==="UPDATE_CART"){
      const exist = state.cart.findIndex(product=> product.id_cart === action.payload.id_cart)
      const new_cart = [...state.cart];
      new_cart[exist].quantity=action.payload.quantity;
      return{
        ...state,
        cart: new_cart
      }
    }else if(action.type === "DELETE_CART"){
      const new_cart = state.cart.filter(product=>{
        return product.id_cart !== action.payload;
      })
      return{
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
          <Switch>
            <Route path="/admin/login" component={Login}>
            </Route>
            <Route path="/admin" component={ShoppingAdmin}>
            </Route>
            <Route path="/products/:id">
              <NavbarClient/>
              <ProductDetail/>
            </Route>
            <Route path="/products">
              <NavbarClient/>
              <AllProducts />
            </Route>
            <Route path="/cart">
              <NavbarClient/>
              <Cart/>
            </Route>
            <Route path="/checkout">
              <Checkout/>
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
