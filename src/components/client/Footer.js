import React from 'react';
import Send from './../../assets/icons/send';

export default function ProductList(){
    return(
        <footer className="text-center pt-5 pb-5">
            <h3>SUBCRIBE</h3>
            <div className="d-flex justify-content-center align-item-center">
                <input type="text" placeholder="Enter Your Email"/>
                <button>
                    <Send/>
                </button>
            </div>
        </footer>
    )
}