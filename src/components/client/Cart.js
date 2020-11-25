import React, { Component } from 'react';
import {Button, Card, Col, Row, Container } from 'reactstrap';
import CommonQuantityInput from './CommonQuantityInput';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import axios from 'axios';

class CartProduct extends Component{
    state={
        quantity: 1
    }
    componentDidMount(){
        this.setState({
            quantity: this.props.product.quantity
        })
    }
    handleChangeQuantity=(data, operator = false)=>{
        if(operator){
            return this.setState({
                quantity: this.state.quantity + data
            },()=>{ //setState is asynchronu so we need a call back
                this.props.updateCart(this.props.product.id_cart, this.state.quantity)
            })
        }
        this.setState({
            quantity: data
        },()=>{ //setState is asynchronu so we need a call back
            this.props.updateCart(this.props.product.id_cart, this.state.quantity)
        }) 
    }
    handleDeleteCart=(event)=>{
        event.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                this.props.deleteCart(this.props.product.id_cart);
              Swal.fire({
                title: "Your product has been deleted!",
                timer: 1200,
                showCancelButton: false,
                showConfirmButton: false,
                icon: 'success'
              })
            }
          })
    }
    render(){
        const {name,price,quantity, image} = this.props.product;
        return <div className="cart-table-rows">
                    <div className="cart-table-cell">
                        <img src={image}  alt={name}/>
                        {name}
                    </div>
                    <div className="cart-table-cell">
                        {price}€
                    </div>
                    <div className="cart-table-cell">
                        <CommonQuantityInput value={this.state.quantity} onChange={this.handleChangeQuantity}/>
                        <br></br>
                    </div>
                    <div className="cart-table-cell">
                        {price*quantity}€
                        <button onClick={this.handleDeleteCart} className="btn-cart-product">Remove</button>
                    </div>
                </div>
    }
}

class Cart extends Component {
    state = {
        open: false
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('')
    }
    toggleModal=()=>{
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        return (
            <>
                <Container className="cart-container" fluid="md">
                    <h2 className="my-5 text-center font-weight-bold"><i>CART</i></h2>
                    <form onSubmit={this.handleSubmit} action="/cart">
                        <div className="content-table">
                            <div className="cart-table-headers">
                                <div className="cart-table-header">
                                    
                                </div>
                                <div className="cart-table-header">
                                    Price
                                </div>
                                <div className="cart-table-header">
                                    Quantity
                                </div>
                                <div className="cart-table-header">
                                    Total
                                </div>
                            </div>
                            {this.props.cart.length>0 ?
                            this.props.cart.map(product=>{
                                return <CartProduct key={product.id} 
                                                    product={product}
                                                    updateCart={this.props.updateCart}
                                                    deleteCart={this.props.deleteCart}
                                                    />
                            }): <h3>EMPTY</h3>} 
                        </div>
                        {this.props.cart.length>0 &&
                            <div className="cart-total mt-3">
                                <h4>SUBTOTAL {this.props.cart_total}€</h4>
                                <p>Shipping, taxes, and discount codes calculated at checkout.</p>
                            </div>
                        }
                    </form>
                    {this.props.cart.length>0 &&
                        <Link className="cart-btn my-3" to={`/checkout`}>Check out</Link>
                    }
                    <div className="continue-shop mb-5">Continue shopping</div>
                </Container>
            </>
        )
    }
}
// value={this.state.quantity} onChange={this.handleChangeQuantity}
const mapStateToProps = state =>{
    const totalPrice = state.cart.reduce((sum,product)=>{
        return sum = (product.price*product.quantity) + sum;
    },0)
    return {
        cart: state.cart,
        cart_total: totalPrice
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        updateCart: (id_cart, quantity)=>{
            dispatch({
                type: "UPDATE_CART",
                payload:{
                    id_cart,
                    quantity
                }
            })
        },
        deleteCart: id_cart =>{
            dispatch({
                type: "DELETE_CART",
                payload: id_cart
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)

