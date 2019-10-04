import React from "react";


function ReviewDetails(props) {
  console.log("All reviews:", props.reviews)

  return (
    <div className="ui segment ReviewDetails">
      <div className="ui header">
      </div>
      {props.rating}
      <br />
      {props.body}
      <br />
      <small>{props.reviewer}</small>

    </div>
  );
}

export default ReviewDetails;