import photo1 from "../assets/photo1.jpg";
// import Video from "../assets/video.mp4";

const Main = () => {
  return (
    <>
      <ul className="nav fixed-top bg-success-subtle border border-dark-subtle">
        <li className="nav-item col ">
          <a
            href="#top"
            className="nav-link text-center text-dark"
            aria-current="page"
          >
            <i className="fa-solid fa-user-tie"></i>
          </a>
        </li>
        <li className="nav-item col ">
          <a
            href="#contact"
            className="nav-link text-center text-dark"
            aria-current="page"
          >
            Contact
          </a>
        </li>
        <li className="nav-item col">
          <a href="#aboutMe" className="nav-link text-center text-dark">
            About Me
          </a>
        </li>
        <li className="nav-item col">
          <a href="#skill" className="nav-link text-center text-dark">
            Skills
          </a>
        </li>
        <li className="nav-item col">
          <a href="#personalInfo" className="nav-link text-center text-dark">
            Personal Info
          </a>
        </li>
        <li className="nav-item col ">
          <a href="#projects" className="nav-link text-center text-dark">
            Projects
          </a>
        </li>
        <li className="nav-item col ">
          <a
            href="#"
            className="nav-link"
            aria-current="page text-center text-dark"
          ></a>
        </li>
      </ul>

      <div className="ps-5 pt-5 mt-3">
        <div className="row text-enter">
          <div className="col-4">
            <div className="row">
              <div className="col-4 ms-0 text-end">
                <p
                  className="position-relative fs-4 fw-bold"
                  data-bs-toggle="tooltip"
                  title="HTML5"
                >
                  <i className="fa-brands fa-html5"></i>
                </p>
                <p
                  className="fs-4 fw-bold with-line"
                  data-bs-toggle="tooltip"
                  title="CSS3"
                >
                  <i className="fa-brands fa-css3-alt"></i>
                </p>

                <p
                  className="fs-4 fw-bold"
                  data-bs-toggle="tooltip"
                  title="JavaScript"
                >
                  <i className="fa-brands fa-js"></i>
                </p>
                <p
                  className="fs-4 fw-bold"
                  data-bs-toggle="tooltip"
                  title="Bootstrap"
                >
                  <i className="fa-brands fa-bootstrap"></i>
                </p>
                <p
                  className="fs-4 fw-bold"
                  data-bs-toggle="tooltip"
                  title="React"
                >
                  <i className="fa-brands fa-react"></i>
                </p>
              </div>
              <div className="col-4 me-0 text-end">
                <p
                  className="fs-4 fw-bold"
                  data-bs-toggle="tooltip"
                  title="Node.js & Express.js"
                >
                  <i className="fa-brands fa-node"></i>
                </p>
                <p
                  className="position-relative fs-4 fw-bold"
                  data-bs-toggle="tooltip"
                  title="PHP"
                >
                  <i className="fa-brands fa-php"></i>
                </p>
                <p
                  className="position-relative fs-4 fw-bold"
                  data-bs-toggle="tooltip"
                  title="Laravel"
                >
                  <i className="fa-brands fa-laravel"></i>
                </p>
                <p
                  className="position-relative fs-4 fw-bold"
                  data-bs-toggle="tooltip"
                  title="Visual Studio Code"
                >
                  <i className="fa-solid fa-code"></i>
                </p>
              </div>
              <div className="col-4 me-0 text-end">
                <p
                  className="position-relative fs-4 fw-bold"
                  data-bs-toggle="tooltip"
                  title="AWS(Amazon Web Service)"
                >
                  <i className="fa-solid fa-server"></i>
                </p>
                <p
                  className="position-relative fs-4 fw-bold"
                  data-bs-toggle="tooltip"
                  title="Gi& Github"
                >
                  <i className="fa-brands fa-github"></i>
                </p>
                <p
                  className="position-relative fs-4 fw-bold"
                  data-bs-toggle="tooltip"
                  title="Ubuntu 22.0.4"
                >
                  <i className="fa-brands fa-ubuntu"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 text-center" id="top">
            <img
              src={photo1}
              className="rounded-5 mb-3 "
              alt="This is my photo"
              width="300"
            />
          </div>
          <div className="col-4 pt-5 d-flex flex-column">
            <div className="mt-auto me-3">
              <a
                href="https://www.linkedin.com/in/kaung-htet-lwin-b77462280/"
                className="d-block mt-1 btn btn-outline-secondary rounded-start-pill"
              >
                <i className="fa-brands fa-linkedin-in"></i>Linkedin
              </a>
              <a
                href="https://www.jobnet.com.mm/job-seeker/dashboard/profile"
                className="d-block mt-1 btn btn-outline-secondary rounded-start-pill"
              >
                <i className="fa-regular fa-id-card"></i> JonNet.com.mm
              </a>
              <a
                href="https://github.com/LeoLwin"
                className="d-block mt-1 btn btn-outline-secondary rounded-start-pill"
              >
                <i className="fa-brands fa-github"></i>Github
              </a>
              <a
                href="https://www.facebook.com/monday2021"
                className="d-block mt-1 btn btn-outline-secondary rounded-start-pill"
              >
                <i className="fa-brands fa-square-facebook"></i> Facebook
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text">
          <h1 className="h1 ps-5 ms-2">KAUNG HTET LWIN</h1>
          <h3 className="h3 ps-5 ms-2">FULL-STACK WEB DEVELOPER</h3>
        </div>
        <hr />

        <div className="container px-4" id="contact">
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
                <i className="fa-solid fa-mobile"></i>: +95 9423732606
              </p>
            </div>
            <div className="col text-start" id="aboutMe">
              <h3>About Me</h3>
              <p>
                I have completed a private course in full-stack web
                development.Before this, I used to work in a bank, so I am new
                to web development. But I am good at handling stress, learning
                quickly, and solving problems. I want to help make your business
                better in my own way.
              </p>
            </div>
            <hr />
          </div>
          <div className="row text-start" id="skill">
            <div className="col-4 text-start">
              <h3>Skills</h3>
              <h6 className="ms-2">Frontend Development</h6>
              <p className="ms-4">
                <i className="fa-brands fa-html5"></i>Html,
                <i className="fa-brands fa-css3-alt"></i> Css,
                <i className="fa-brands fa-js"></i> JavaScript,
                <br />
                <i className="fa-brands fa-bootstrap"></i> Bootstrap,
                <i className="fa-brands fa-react"></i> React
              </p>
              <h6 className="ms-2">Backend Development</h6>
              <p className="ms-4">
                <i className="fa-brands fa-node-js"></i> Node.js, Express Js
              </p>
              <h6 className="ms-2">Database Technology </h6>
              <p className="ms-4">
                <i className="fa-solid fa-database"></i>MySQL, MongoDB
              </p>
              <h6 className="ms-2">Node </h6>
              <p className="ms-4 mb-1">Node-Express-MySQL</p>
              <p className="ms-4">Node-Express-MongoDB</p>
              <h6 className="ms-2">PHP </h6>
              <p className="ms-4 mb-1">Session</p>
              <p className="ms-4 mb-1">PHP-MySQL-1</p>
              <p className="ms-4">PHP-MySQL-2</p>
              <h6 className="ms-2">Laravel </h6>
              <p className="ms-4 mb-1">
                {" "}
                <i className="fa-brands fa-laravel"></i> Laravel V10
              </p>
              <p className="ms-4 mb-1">Joint PHP to Laravel</p>
              <p className="ms-4 ">Laravel V10 -API -Passport</p>
              <h6 className="ms-2">Tools </h6>
              <p className="ms-4 mb-1">Postman</p>
              <p className="ms-4 mb-1">VS Code</p>
              <p className="ms-4">Git & Github</p>
              <h6 className="ms-2">Operating System </h6>
              <p className="ms-4 mb-1">Ubuntu 22.04.3</p>
            </div>
            <div className="col-8 text-start" id="personalInfo">
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
        <div className="container px-4" id="projects">
          <div className="row ">
            <h3 className="text-start">Projects</h3>
            <div className="col-12 text-start">
              <p>
                <strong>Technology</strong> : React, Node.js, Express, MongoDB
              </p>
              <p>
                <strong>Projct Name</strong> : Bank Adminstration
                <a className="p-1 rounded" href="http://khl.znova.one/">
                  To View My Project
                </a>
              </p>
              <h5>Reason</h5>
              <p className="ms-2">
                I am currently working in a banking administrative role and am
                actively engaged in a project related to my current position.he
                project revolves around managing employee information,
                calculating allowances and salaries, and employs a tech stack
                featuring React, JavaScript, Bootstrap, and React Context for
                the frontend. Axios is used to retrieve data from the backend,
                where JWT tokens act as middleware to secure access to web
                pages. User accounts can be created and maintained, leveraging
                MongoDB as the backend database. Express serves as the backend
                framework to handle server-side functionalities. Salary
                calculations are executed on the backend, and a date picker is
                implemented to facilitate monthly salary viewing.
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
                The ecommerce project is geared towards understanding the usage
                of React context and functions, along with mastering the
                practical implementation of working with data in components.
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
                operations (create, read, update, delete). It provides a
                practical platform to understand the processes of managing
                information flow within a system
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-lg-start bg-body-tertiary text-muted ">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-gradient border border-dark-subtle">
          <div className="me-5 d-none d-lg-block">
            <span></span>
          </div>

          <div className="text-end">
            <a
              href="https://www.facebook.com/monday2021"
              className="me-4 text-reset"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a
              href="https://www.instagram.com/phoekaung.3819/"
              className="me-4 text-reset"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kaung-htet-lwin-b77462280/"
              className="me-4 text-reset"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/LeoLwin" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        {/* <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <div className="text-center p-4 bg-dark text-white">
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            KaungHtetLwin
          </a>
        </div>
      </footer>
    </>
  );
};

export default Main;
