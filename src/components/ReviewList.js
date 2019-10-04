import React from 'react';
import ReviewDetails from './ReviewDetails'


function ReviewList(props) {
    console.log("This is props: ", props);

    return (


        <ul>

            {props.reviews.map((review) => (
                <li key={review.id}>
                    <ReviewDetails
                        rating={review.rating}
                        body={review.body}
                        reviewer={review.reviewer.full_name}

                    />







                </li>

            ))}



        </ul>

    );


}
export default ReviewList;