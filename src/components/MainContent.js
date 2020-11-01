import React, { Component } from 'react';
import ContentHeader from './ContentHeader';
import ProductRow from './ProductRow';
import Modal from './Modal';


class MainContent extends Component {
    state = {
        open: false,
        products: [
        ]
      };
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
    toggleModal = ()=>{
        this.setState({
            open: !this.state.open
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
                                return <ProductRow key={product.id} product={product}/>
                            })
                            :<h3 className="text-center mt-3">empty product</h3>
                        }
                </div>  
            </main>
            {
                this.state.open?<Modal addProduct={this.addProduct} toggleModal={this.toggleModal}/>:''
            }
            </>
        );
    }
}
 
export default MainContent;