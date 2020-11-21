import Axios from 'axios';
import React from 'react';
import {Row, Spinner} from 'reactstrap';
import Product from './Product';
import axios from 'axios';
import {connect} from 'react-redux'


class ProductList extends React.Component{
    state={
        products:[],
        loading: false
    }
    componentDidMount(){
        this.setState({
            loading: true
        })
        axios.get('http://localhost:3001/products')
            .then(res=>{
                this.setState({
                    products: res.data,
                    loading: false
                })
            })
    }
    render(){
        return(
            <Row>
                {this.state.loading && <Spinner className="m-auto" color="dark" />} {/* if true return spiner, else donot return*/}
                {
                    this.state.products.map((product, index)=>{
                        return <Product addToCart={this.props.addToCart} key={`$product_${index}`} id={product.id} name={product.name} price={product.price} image={product.image[0]}/>
                    })
                }
            </Row>
        );
    }

    
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addToCart: (product, quantity)=>{
            dispatch({type: "ADD_TO_CART", payload: {
                ...product,
                quantity
            }})
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductList)