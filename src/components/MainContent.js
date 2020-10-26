import React, { Component } from 'react';
import ProductRow from './ProductRow';

class MainContent extends Component {
    state = {  }
    render() { 
        return (  
            <main>
                <div className="content-header">
                    <h3>Product</h3>
                    <button className="btn">Add</button>
                </div>
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
                        <ProductRow name="Product 1" price="2" id="1" img="https://minimalistbaker.com/wp-content/uploads/2015/08/AMAZING-5-Ingredient-Vanilla-Coconut-Ice-Cream-Incredibly-simple-perfectly-sweet-INSANELY-creamy-vegan-glutenfree-icecream-dessert-recipe-vanilla-coconuticecream-coconut.jpg"></ProductRow>
                </div>  
            </main>
        );
    }
}
 
export default MainContent;