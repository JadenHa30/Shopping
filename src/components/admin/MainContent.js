import React, { Component } from 'react';
import ContentHeader from './ContentHeader';
import ProductRow from './ProductRow';
import Modal from './Modal';
import axios from 'axios';


class MainContent extends Component {
    state = {
        open: false,
        products: [
        ],
        isEditting: undefined //index of product
      };
      componentDidMount(){
          axios.get("http://localhost:3001/products")
            .then(res=>{
                this.setState({
                    products: res.data
                })
            })
      }

    addProduct = (name, price, image) =>{
        const product={
                id: this.state.products.length, //set increasing id
                name,
                price,
                image
              }
        this.setState({
            products:[...this.state.products,product]
        })
    }

    updateProduct = (name, price, image) =>{
        const new_products = [...this.state.products];
        new_products[this.state.isEditting]={
            ...new_products[this.state.isEditting], //we will keep info that cannot edit
            name,
            image,
            price
        }
        this.setState({
            products: new_products
        })
    }

    deleteProduct = (id)=>{
        const update_product = [...this.state.products].filter(product => {
            return product.id !== id;
        });
        this.setState({
            products: update_product
        })
    }

    toggleModal = ()=>{
        this.setState({
            open: !this.state.open
        })
    }
    
    updateIsEditting=(id)=>{
        const product_index = this.state.products.findIndex((product)=>{
            return product.id === id;
        })
        this.setState({
            isEditting: product_index
        },()=>console.log(this.state.isEditting))
        this.toggleModal();
    }

    clearIsEditting = ()=>{
        this.setState({
            isEditting: undefined
        })
    }

    render() { 
        return (  
            <>
            <main>
                <ContentHeader toggleModal={this.toggleModal} addProduct={this.addProduct} />
                <div className="content-table">
                        <div className="table-headers">
                            <div className="table-header">
                                ID
                            </div>
                            <div className="table-header">
                                Name
                            </div>
                            <div className="table-header">
                                Price
                            </div>
                            <div className="table-header">
                                Image
                            </div>
                            <div className="table-header">
                                Action
                            </div>
                        </div>
                        {
                            this.state.products.length>0?
                            this.state.products.map((product) => {
                                return <ProductRow 
                                            key={product.id} 
                                            product={product}
                                            deleteProduct={this.deleteProduct}
                                            updateIsEditting={this.updateIsEditting}
                                            />
                            })
                            :<h3 className="text-center mt-3">empty product</h3>
                        }
                </div>  
            </main>
            {
                this.state.open?<Modal clearIsEditting={this.clearIsEditting} 
                                editingProduct={this.state.products[this.state.isEditting]} 
                                addProduct={this.addProduct} toggleModal={this.toggleModal}
                                updateProduct={this.updateProduct}/>
                :''
            }
            </>
        );
    }
}

export default MainContent;