import React from 'react';

function DeleteButton(props) {
  return (
    <button className="ui right floated red button" onClick={props.onDeleteClick}>
      DeleteButton
      </button>

  );
}

export default DeleteButton;