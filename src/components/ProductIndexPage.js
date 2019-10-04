import React, { Component } from 'react';
import ProductDetails from "./ProductDetails"
import ReviewList from "./ReviewList"
import ProductIndexPageData from "../data/ProductIndexPageData"

class ProductIndexPage extends Component {
    render() {
        return (
            <div>
                <h1>Product Index Page</h1>

                <ProductDetails
                    title={ProductIndexPageData[0].title}
                />

            </div>

        )

    }

}


export default ProductIndexPage;