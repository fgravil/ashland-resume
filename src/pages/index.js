import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import ImageCard from '../components/ImageCard';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary"> {config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            <a href={`mailto:${config.email}`}>{config.email} · </a>
            {config.address} · {config.phone}
          </div>
          <p className="lead mb-5">{config.bio}</p>
          <div className="social-icons">
            {config.socialLinks.map((social) => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          {config.experienceList.map((experience, index) => (
            <Experience {...experience} key={index} />
          ))}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="leadership"
      >
        <div className="w-100">
          <h2 className="mb-5">Leadership and Professional Development</h2>
          {config.leadership.map((leadership, index) => (
            <Experience {...leadership} key={index} />
          ))}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          {config.educationList.map((education, index) => (
            <Education {...education} key={index} />
          ))}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <Skills {...config} />
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="portfolio"
      >
        <div className="w-100">
          <h2 className="mb-5">Portfolio</h2>
          <div className="container">
            <div className="row">
              {config.portfolio.items.map((item, index) => (
                <div className="col-md-4">
                  <ImageCard {...item} key={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
