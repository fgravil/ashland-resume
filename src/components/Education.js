import React from 'react';

const Education = ({ institution, qualification, description, period }) => (
  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
      <h3 className="mb-0">{institution}</h3>
      <div className="subheading mb-3">{qualification}</div>
      <div>{description}</div>
    </div>
    <div className="resume-date text-md-right">
      <span className="text-primary">{period}</span>
    </div>
  </div>
);

export default Education;
