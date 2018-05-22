import React from "react";

const FeedItem = props => {
  const openModal = () => {
    props.modalCallback({ text: props.description });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <a href={props.url}>{props.name}</a>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={openModal}
      >
        Info
      </button>
    </li>
  );
};

export default FeedItem;
