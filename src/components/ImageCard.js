import React from 'react';

const ImageCard = ({ title, img, description, url }) => (
  <div className="card mb-4 shadow-sm">
    <img
      src={require(`../assets/images/${img}`)}
      className="card-img-top"
      width="100"
      height="225"
    ></img>
    <div className="card-body">
      <h6 class="card-title">{title}</h6>
      <p className="card-text">{description}</p>
      <a
        href={url}
        className="btn btn-sm btn-outline-secondary"
        role="button"
        aria-pressed="true"
        target="_blank"
      >
        View
      </a>
    </div>
  </div>
);

export default ImageCard;
