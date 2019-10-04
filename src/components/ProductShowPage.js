import React, { Component } from 'react';
import ProductDetails from "./ProductDetails"
import ReviewDetails from "./ReviewDetails"
import product from "./ReviewListData"
import ProductShowPageData from "../data/ProductShowPageData"

class ProductShowPage extends Component {
    render() {
        return (
            <div>
                <h1>Product Show Page</h1>

                {ProductShowPageData.map((product, index) => (
                    <li key={index}>
                        <p>
                            {product.title}
                            <br />
                            {product.price}
                            <br />
                            <small>{product.seller.full_name}</small>
                        </p>


                    </li>
                ))}
            </div>
        )
    }
}



export default ProductShowPage;