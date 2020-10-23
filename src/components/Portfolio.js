import React from 'react';

const Portfolio = ({ name, description, url }) => (
  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
      <div className="subheading mb-3">{name}</div>
      <div>{description}</div>
    </div>
    <div className="resume-date text-md-right">
      <span className="text-primary portfolio-icons">
        <a key={url} href={url}>
          <i className={`fab fa-git-alt`}></i>
        </a>
      </span>
    </div>
  </div>
);

export default Portfolio;
