import Axios from 'axios';
import React from 'react';
import {Row} from 'reactstrap';
import Product from './Product';
import axios from 'axios';

export default class ProductList extends React.Component{
    state={
        products:[]
    }
    componentDidMount(){
        axios.get('http://localhost:3001/products')
            .then(res=>{
                this.setState({
                    products: res.data
                })
            })
    }
    render(){
        return(
            <Row>
                {
                    this.state.products.map((product, index)=>{
                        return <Product key={`$product_${index}`} name={product.name} price={product.price} image={product.image}/>
                    })
                }
            </Row>
        );
    }
}