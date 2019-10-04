import React, { Component } from 'react';
import ProductDetails from "./ProductDetails"
import ReviewList from "./ReviewList"
import ProductIndexPageData from "../data/ProductIndexPageData"

class ProductIndexPage extends Component {
    render() {
        return (
            <div>
                <h1>Product Index Page</h1>

                {ProductIndexPageData.map((product, index) => (
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


export default ProductIndexPage;