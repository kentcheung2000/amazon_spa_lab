import React from "react";


function ReviewDetails(props) {
  console.log("All reviews:", props.reviews)



  return (
    <div className="ui segment ReviewDetails">
      <div className="ui header">
        <h3>Reviews</h3>
      </div>

      {props.reviews.map(review => (
        <div>
          <p>{review.rating}</p>
          <p>{review.body}</p>
          <p>{review.reviewer.full_name}</p>
        </div>

      ))}





    </div>
  );
}

export default ReviewDetails;