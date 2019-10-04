import React from "react";


function ProductDetails(props) {
    return (
        <div>
            <h1>Product Details</h1>

            <h2>{props.title}</h2>
            {/* <p>{props.product.description}</p>
            <p>{props.product.price}</p>
            {<p> seller: {props.product.seller.full_name} created at: {props.product.created_at}</p>} */}


        </div>


    );
}

export default ProductDetails;