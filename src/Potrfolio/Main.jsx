// import React from "react";
import photo1 from "../assets/photo1.jpg";
// import Video from "../assets/video.mp4";

const Main = () => {
  return (
    <>
      <div className="row">
        <div className="col-4 ">hello</div>
        <div className="col-4 text-center">
          <img
            src={photo1}
            className="rounded-5 mb-3 "
            alt="This is my photo"
            width="300"
          />
        </div>
        <div className="col-4 pt-5 d-flex flex-column">
          <div className="mt-auto">
            <a
              href="https://www.facebook.com/monday2021"
              className="d-block mt-1 btn btn-outline-secondary rounded-start-pill"
            >
              <i className="fa-brands fa-square-facebook"></i>facebook
            </a>
            <a
              href="https://www.linkedin.com/in/kaung-htet-lwin-b77462280/"
              className="d-block mt-1 btn btn-outline-secondary rounded-start-pill"
            >
              <i className="fa-brands fa-linkedin-in"></i>
              Linkedin
            </a>
            <a
              href="https://github.com/LeoLwin"
              className="d-block mt-1 btn btn-outline-secondary rounded-start-pill"
            >
              <i className="fa-brands fa-github"></i>
              Github
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="text">
        <h1 className="h1 text-start">KAUNG HTET LWIN</h1>
        <h3 className="text-start">FULL-STACK WEB DEVELOPER</h3>
      </div>
      <hr />

      <div className="container px-4">
        <div className="row ">
          <div className="col-4 text-start">
            <h3>Contact</h3>
            <p>
              <i className="fa-regular fa-envelope"></i>:
              kaunghtetlwin982@gmail.com
            </p>
            <p>
              <i className="fa-regular fa-address-card"></i>: Irrigation and
              Water Utilization Management Dept, Head Office, (11) Qr , Yankin
              Township, Yangon
            </p>
            <p>
              {" "}
              <i className="fa-solid fa-mobile"></i>: s+95 9423732606
            </p>
          </div>
          <div className="col text-start">
            <h3>About Me</h3>
            <p>
              I have completed a private course in full-stack web
              development.Before this, I used to work in a bank, so I am new to
              web development. But I am good at handling stress, learning
              quickly, and solving problems. I want to help make your business
              better in my own way.
            </p>
          </div>
          <hr />
        </div>
        <div className="row text-start">
          <div className="col-4 text-start">
            <h3>Skills</h3>
            <h6 className="ms-2">Frontend Development</h6>
            <p className="ms-4">Html,Css, Bootstrap, React,</p>
            <h6 className="ms-2">Backend Development</h6>
            <p className="ms-4">Node.js, Express Js</p>
            <h6 className="ms-2">Database Technology </h6>
            <p className="ms-4">MySQL, MongoDB</p>
            <h6 className="ms-2">Node </h6>
            <p className="ms-4 mb-1">Node-Express-MySQL</p>
            <p className="ms-4">Node-Express-MongoDB</p>
            <h6 className="ms-2">PHP </h6>
            <p className="ms-4 mb-1">Session</p>
            <p className="ms-4 mb-1">PHP-MySQL-1</p>
            <p className="ms-4">PHP-MySQL-2</p>
            <h6 className="ms-2">Laravel </h6>
            <p className="ms-4 mb-1">Laravel V10</p>
            <p className="ms-4 mb-1">Joint PHP to Laravel</p>
            <p className="ms-4 ">Laravel V10 -API -Passport</p>
            <h6 className="ms-2">Tools </h6>
            <p className="ms-4 mb-1">Postman</p>
            <p className="ms-4 mb-1">VS Code</p>
            <p className="ms-4">Git & Github</p>
            <h6 className="ms-2">Operating System </h6>
            <p className="ms-4 mb-1">Ubuntu 22.04.3</p>
          </div>
          <div className="col-8 text-start">
            <h3 className="mb-0">Perosonal Info</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>DOB : 03/08/1996</td>
                  <td>NRC : 7/PATATA(N)119350</td>
                </tr>
                <tr>
                  <td>Gender : Male </td>
                  <td> Availability : Immediately</td>
                </tr>
                <tr>
                  <td>
                    <h3>Experience</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Senior Assistant</h6>
                    <p className="ms-4">
                      CB Bank, Nattalin Branch — 2 0 2 1 - 1 1 / 2 0 2 3
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Junior Assistant</h6>
                    <p className="ms-4">
                      CB Bank, Pyay Branch — 2 0 1 9 - 2 0 2 1
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Marketing Assistant</h6>
                    <p className="ms-4">
                      JDS (Junior Diamond Star), Yangon — 2 0 1 8 - 2 0 1 9{" "}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Marketing Assistant</h6>
                    <p className="ms-4">
                      JDS (Junior Diamond Star), Yangon — 2 0 1 8 - 2 0 1 9{" "}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Education</h3>
                    <h5 className="ms-2 my-0">
                      (2017)Diploma in Computer Studies
                    </h5>
                    <p className=" ms-4 my-0">Pyay University, Pyay</p>
                    <h5 className="ms-2">
                      (2016)Bachelor of Science (Zoology)
                    </h5>
                    <p className=" ms-4 mt-0">Pyay University, Pyay</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr />
      <div className="container px-4">
        <div className="row ">
          <h3 className="text-start">Projects</h3>
          <div className="col-12 text-start">
            <p>
              <strong>Technology</strong> : React, Node.js, Express, MongoDB
            </p>
            <p>
              <strong>Projct Name</strong> : Bank Adminstration
            </p>
            <h5>Reason</h5>
            <p className="ms-2">
              I am currently working in a banking administrative role and am
              actively engaged in a project related to my current position.he
              project revolves around managing employee information, calculating
              allowances and salaries, and employs a tech stack featuring React,
              JavaScript, Bootstrap, and React Context for the frontend. Axios
              is used to retrieve data from the backend, where JWT tokens act as
              middleware to secure access to web pages. User accounts can be
              created and maintained, leveraging MongoDB as the backend
              database. Express serves as the backend framework to handle
              server-side functionalities. Salary calculations are executed on
              the backend, and a date picker is implemented to facilitate
              monthly salary viewing.
            </p>
            <hr />
          </div>
          <div className="col-12 text-start">
            <p>
              <strong>Technology</strong> : React,JavaScript
            </p>
            <p>
              <strong>Projct Name</strong> : Ecommerce
            </p>
            <h5>Reason</h5>
            <p className="ms-2">
              The ecommerce project is geared towards understanding the usage of
              React context and functions, along with mastering the practical
              implementation of working with data in components.
            </p>
            <hr />
          </div>
          <div className="col-12 text-start">
            <p>
              <strong>Technology</strong> : Html, Css, JavaScript
            </p>
            <p>
              <strong>Projct Name</strong> : Blog List
            </p>
            <h5>Reason</h5>
            <p className="ms-2">
              The BLOGLIST project was started to learn how data moves between
              different parts and to become proficient in essential CRUD
              operations (create, read, update, delete). It provides a practical
              platform to understand the processes of managing information flow
              within a system
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
