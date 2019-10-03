import React from "react";
import ProductDetails from "./ProductDetails"
import ReviewDetails from "./ReviewDetails"
import product from "./ReviewListData"

function ProductShowPage(props) {
    // console.log("this is product DATA inside PRODUCTSHOWPAGE => ", product)
    return (
        <div>
            <ProductDetails product={product} />
            <ReviewDetails reviews={product.reviews} />
        </div>
    );
}


export default ProductShowPage;