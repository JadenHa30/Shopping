import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import axios from 'axios'
import Swal from 'sweetalert2'

class ProductCheckout extends Component{
    render(){
        const {name, image, price, quantity} =  this.props.product;
        return(
            <Row className="productCheckout">
                <Col md={6}> 
                    <img src={image} alt={name}/>
                    <h6>{name} <br></br> x {quantity}</h6>
                    
                </Col>
                <Col className="text-right" md={6}> <p>{price*quantity} €</p></Col>
            </Row>
        )
    }
} 
class Checkout extends Component {
    state={
        full_name:"",
        phone:"",
        address:"",
        cart:[]
    }
    
    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:3001/carts',{
            ...this.state,
            cart:[
                ...this.props.cart
            ],
            total_items: this.props.total_items,
            total_price: this.props.total_price
        }).then(res=>{
            Swal.fire({
                title:"Checkout successfully",
                timer:2000,
                showConfirmButton:false,
                icon:'success',
                timerProgressBar:true
            }).then(()=>{
                this.props.clearCart()
                this.handleClose();
            })
        }).catch(err=>{
            Swal.fire({
                title:"Checkout unsuccessfully",
                text:"Something went wrong",
                timer:2000,
                showConfirmButton:false,
                icon:'error',
                timerProgressBar:true
            })
        })
        
    }
    render() {
        const {full_name,address,phone} = this.state;
        return (
            <>
                <Container className="checkout mt-5">
                    <div className="d-flex justify-content-center align-item-center">
                        <img src="https://cdn.shopify.com/s/files/1/1687/1083/files/logo_Mollyclo_2019-black_381741f7-4ec7-4159-a976-9fc1e43dfe9c.png?157" alt="homeLogo"></img>
                    </div>
                        <h5 className="text-center my-3">Cart Information</h5>
                    <Row>
                        <Col md={8}>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="full_name" className="form-control" placeholder="Full name" value={full_name} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" name="address" className="form-control" placeholder="Address" value={address} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" name="phone" className="form-control" placeholder="Phone" value={phone} onChange={this.handleChange}/>
                                </div>
                                <button type="submit" className="cart-btn my-3">
                                    Checkout
                                </button>
                            </form>
                        </Col>
                        <Col md={4}>
                            {this.props.cart.length>0 ?
                            this.props.cart.map(product=><ProductCheckout product={product}/>):''}
                            <Row>
                                <Col md={6}> <h5>Total Items:</h5> </Col>
                                <Col md={6} className="text-right"> <h5>{this.props.total_items}</h5></Col>
                            </Row>
                            <Row>
                                <Col md={6}> <h5>Total Price:</h5> </Col>
                                <Col md={6} className="text-right"> <h5>{this.props.total_price} €</h5></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    const totalPrice = state.cart.reduce((sum, product) => {
        return sum = product.quantity*product.price + sum;
    }, 0)
    const totalItems = state.cart.reduce((sum,product)=>{
        return sum = product.quantity + sum;
    },0)
    return {
        cart: state.cart,
        total_price: totalPrice,
        total_items : totalItems
    }
}
export default connect(mapStateToProps)(Checkout);