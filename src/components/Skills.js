import React from 'react';

const Skills = ({ skills, langTools }) => (
  <>
    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
    <ul className="list-inline dev-icons">
      {langTools.map((education, index) => {
        const { iconClass } = education;
        return (
          <li className="list-inline-item" key={index}>
            <i className={`fab ${iconClass}`}></i>
          </li>
        );
      })}
    </ul>

    <div className="subheading mb-3">Other skills</div>
    <ul className="fa-ul mb-0">
      {skills.map((skill, index) => {
        return (
          <li key={index}>
            <i className="fa-li fa fa-check"></i>
            {skill}
          </li>
        );
      })}
    </ul>
  </>
);

export default Skills;
