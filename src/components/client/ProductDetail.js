import React from 'react';
import {withRouter} from 'react-router-dom'
import { Button, Card, Col, Container, Row, Spinner } from 'reactstrap';
import axios from 'axios';
import NavbarClient from './NavbarClient';
import ImageContainer from './ImageContainer';
import Footer from './Footer'
import CommonQuantityInput from './CommonQuantityInput';
import API_CONSTANT from './../../assets/constant/api';
import { connect } from 'react-redux';


class ProductDetail extends React.Component{
    state={
        quantity:1,
        product_detail:{
            id: null,
            name: '',
            price: null,
            image: []
        },
        loading: undefined
    }
    handleChangeQuantity=(data)=>{
        this.setState({
            quantity: this.state.quantity + data
        })
    }
    componentDidMount(){
        this.setState({
            loading: true
        })
        axios.get(`${API_CONSTANT.domain}/products/${this.props.match.params.id}`)
            .then(res=>{
                this.setState({
                    product_detail: res.data,
                    loading: false
                })
            })
            .catch(err => console.log(err))
    }
    handleAddToCart=()=>{
        this.props.addToCart({
            ...this.state.product_detail,
            image: this.state.product_detail.image[0]
        }, this.state.quantity)
    }
    render(){
        const {name, price, image} = this.state.product_detail;
        return(
            <>
                {this.state.loading === false ? 
                <Container className="my-5">
                    <Row>
                        <Col md={6}>
                            <ImageContainer items={image}/>
                        </Col>
                        <Col md={6}>
                            <Card className="p-3">
                                <h3>{name}</h3>
                                <h5>Price: {price}€</h5>
                                <CommonQuantityInput value={this.state.quantity} onChange={this.handleChangeQuantity}/>
                                <Button onClick={this.handleAddToCart} color="dark" outline>Add to cart</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                :<Spinner className="d-flex my-5 mx-auto" color="dark" />
                }
            </>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addToCart: (product, quantity)=>{
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    ...product,
                    quantity
                }
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(withRouter(ProductDetail));