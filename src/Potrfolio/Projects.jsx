import React from "react";
import "./Portfolio.css";

const Projects = () => {
  return (
    <div className="info border border-info px-2 py-2 rounded-4">
      <div
        id="carouselExampleIndicators"
        className="carousel slide experience text project text-white rounded-4"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active px-5 pt-5">
            <p>
              <strong className="h5">Technology</strong> : React, Node.js,
              Express, MongoDB
            </p>
            <p>
              <strong className="h5">Project Name </strong>: Banking
              Administration
            </p>
            <p>
              <strong className="h5">Reason</strong>I am currently working in a
              banking administrative role and am actively engaged in a project
              related to my current position.The project revolves around
              managing employee information, calculating allowances and
              salaries, and employs a tech stack featuring React, JavaScript,
              Bootstrap, and React Context for the frontend. Axios is used to
              retrieve data from the backend, where JWT tokens act as middleware
              to secure access to web pages. User accounts can be created and
              maintained, leveraging MongoDB as the backend database. Express
              serves as the backend framework to handle server-side
              functionalities. Salary calculations are executed on the backend,
              and a date picker is implemented to facilitate monthly salary
              viewing.
            </p>
            <a href="http://khl.znova.one/" className="mb-5">
              To view My Project
            </a>
            <p className="mb-0">UserName - white@gmail.com</p>
            <p className="mb-3">Password - 123456</p>

          </div>
          <div className="carousel-item px-5 pt-5">
            <p>
              <strong className="h5">Technology</strong> : React, JavaScript
            </p>
            <p>
              <strong className="h5">Project Name </strong>: Ecommerce
            </p>
            <p className="mb-5">
              <strong className="h5">Reason</strong>The ecommerce project is
              geared towards understanding the usage of React context and
              functions, along with mastering the practical implementation of
              working with data in components.
            </p>
          </div>
          <div className="carousel-item px-5 pt-5">
            <p>
              <strong className="h5">Technology</strong> : React, JavaScript
            </p>
            <p>
              <strong className="h5">Project Name </strong>: Blog List
            </p>
            <p className="mb-5">
              <strong className="h5">Reason</strong>The BLOGLIST project was
              started to learn how data moves between different parts and to
              become proficient in essential CRUD operations (create, read,
              update, delete). It provides a practical platform to understand
              the processes of managing information flow within a system.
            </p>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
