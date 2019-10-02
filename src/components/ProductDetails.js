import React from "react";


function ProductDetails(props) {
    console.log(props.seller.full_name)
    return (
        <div>
            <h1>Product Details</h1>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.price}</p>

            <p> seller = {props.seller.full_name} created at = {props.created_at}</p>
        </div>


    );

}

export default ProductDetails;