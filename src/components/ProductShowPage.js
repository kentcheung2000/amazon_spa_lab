import React, { Component } from 'react';
import ReviewList from "./ReviewList"
import ProductShowPageData from "../data/ProductShowPageData"

class ProductShowPage extends Component {
    render() {
        return (
            <div>
                <h1>Product Show Page</h1>

                {ProductShowPageData.title}
                <br />
                {ProductShowPageData.description}
                <br />
                {ProductShowPageData.price}
                <br />

                {/* {ProductShowPageData.reviews.map((review, index) => (
                    <li key={index}>
                        <p>
                            {review.rating}
                            <br />
                            {review.body}
                            <br />
                            <small>{review.reviewer.full_name}</small>
                        </p>
                    </li>
                ))}

                {ProductShowPageData.tags.map((tag, index) => (
                    <li key={index}>
                        <p>
                            {tag.name}
                            <br />

                        </p>
                    </li>
                ))} */}



                <h3>Reviews</h3>

                <ReviewList reviews={ProductShowPageData.reviews} />

            </div>
        )
    }
}



export default ProductShowPage;