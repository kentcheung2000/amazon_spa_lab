import React from "react";


function ReviewDetails(props) {
  return (
    <div className="ui segment ReviewDetails">
      <div className="ui header">
        <h1>Review Details</h1>
      </div>
      <p>{props.rating}</p>
      <p>{props.body}</p>
      <p>{props.created_at}</p>
      <p>{props.reviewer.full_name}</p>
    </div>
  );
}

export default ReviewDetails;