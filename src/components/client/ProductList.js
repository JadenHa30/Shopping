import Axios from 'axios';
import React from 'react';
import {Row, Spinner} from 'reactstrap';
import Product from './Product';
import axios from 'axios';
import {connect} from 'react-redux';
import API_CONSTANT from './../../assets/constant/api.js';
import ReactPaginate from 'react-paginate'


class ProductList extends React.Component{
    state={
        products:[], //all product data
        loading: false,
        offset: 0, //index of beginning product
        pageProducts: [], //products per page
        perPage: 9, //number of products per page
        currentPage: 0
    }

    handlePageClick = (e) =>{
        const selectedPage = e.selected;
        const offset = selectedPage*this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, ()=>{
            this.loadMoreData()
        })
    }

    loadMoreData(){
        const data = this.state.products;
        const slice = data.slice(this.state.offset, this.state.offset+this.state.perPage); //slice(begin, end)
        this.setState({
            pageCount: Math.ceil(data.length/this.state.perPage),
            pageProducts: slice
        })
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        axios.get(`${API_CONSTANT.domain}/products`)
            .then(res=>{
                let products = res.data;
                let slice = products.slice(this.state.offset, this.state.offset+this.state.perPage);
                this.setState({
                    products: products,
                    pageProducts: slice,
                    pageCount: Math.ceil(products.length/this.state.perPage),
                    loading: false
                })
            })
    }
    render(){
        return(
            <Row>
                {this.state.loading && <Spinner className="m-auto" color="dark" />} {/* if true return spiner, else donot return*/}
                {
                    this.state.pageProducts.map((product, index)=>{
                        return <Product addToCart={this.props.addToCart} key={`$product_${index}`} id={product.id} name={product.name} price={product.price} image={product.image[0]}/>
                    })
                }
                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
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