import React, { Component } from 'react'
import { Button, Card, Col, Row, Container } from 'reactstrap'
import CommonQuantityInput from './CommonQuantityInput';
import NavbarClient from './NavbarClient'
import Footer from './Footer.js';
import {connect} from 'react-redux'

const CartProduct = props =>{
    const {name,price,quantity, image ,handleChangeQuantity} = props.product;
    return <div className="cart-table-rows">
                <div className="cart-table-cell">
                    <img src={image}  alt=""/>
                    {name}
                </div>
                <div className="cart-table-cell">
                    {price}€
                </div>
                <div className="cart-table-cell">
                    <CommonQuantityInput value={quantity} onChange={handleChangeQuantity}/>
                </div>
                <div className="cart-table-cell">
                    {price*quantity}€
                </div>
            </div>
}

class Cart extends Component {
    state={
        name: 'product1',
        price: 50,
        quantity: 1,
    }
    handleChangeQuantity=(data, operator = false)=>{
        if(operator){
            return this.setState({
                quantity: this.state.quantity + data
            })
        }
        this.setState({
            quantity: data
        })
    }
    render() {
        const {name,price,quantity} = this.state;
        return (
            <>
                <Container className="cart-container" fluid="md">
                    <h2 className="my-5 text-center font-weight-bold"><i>CART</i></h2>
                    <form action="/cart">
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
                                return <CartProduct key={product.id} product={product} handleChangeQuantity={this.handleChangeQuantity}/>
                            }): <h3>EMPTY</h3>} 
                        </div>
                        <div className="cart-total mt-3">
                            <h4>SUBTOTAL 50€</h4>
                            <p>Shipping, taxes, and discount codes calculated at checkout.</p>
                        </div>
                    </form>
                    <Button className="cart-btn my-3">Check out</Button>
                    <div className="continue-shop mb-5">Continue shopping</div>
                </Container>
            </>
        )
    }
}
// value={this.state.quantity} onChange={this.handleChangeQuantity}
const mapStateToProps = state =>{
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps)(Cart)

