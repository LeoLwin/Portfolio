// import "./Portfolio.css";

// const Projects = () => {
//   return (
//     <div className="info border border-info px-2 py-2 rounded-4">
//       <div
//         id="carouselExampleIndicators"
//         className="carousel slide experience text project text-white rounded-4"
//       >
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active px-5 pt-5 col-md-6">
//             <p>
//               <strong className="h5">Technology</strong> : React, Node.js,
//               Express, MongoDB
//             </p>
//             <p>
//               <strong className="h5">Project Name </strong>: Banking
//               Administration
//             </p>
//             <p>
//               <strong className="h5">Reason</strong>I worked in banking administration last year and 
//               am currently engaged in a project focused on managing employee information and calculating 
//               salaries. The project uses React, JavaScript, Bootstrap, and React Context for the frontend,
//                with Axios for backend data retrieval. JWT tokens secure access, user accounts are managed 
//                with MongoDB, and Express handles server-side operations. Salary calculations occur on the 
//                backend, and a date picker facilitates monthly salary viewing.
//             </p>
//             <a href="http://khl.znova.one/" className="mb-1">
//               To view My Project
//             </a>
//             <p className="mb-0">UserName - white@gmail.com</p>
//             <p className="mb-3">Password - 123456</p>

//           </div>
//           <div className="carousel-item px-5 pt-5 col-md-6">
//             <p>
//               <strong className="h5">Technology</strong> : React, JavaScript
//             </p>
//             <p>
//               <strong className="h5">Project Name </strong>: Ecommerce
//             </p>
//             <p className="mb-1">
//               <strong className="h5">Reason</strong>The ecommerce project is
//               geared towards understanding the usage of React context and
//               functions, along with mastering the practical implementation of
//               working with data in components.
//             </p>
//           </div>
//           <div className="carousel-item px-5 pt-5 col-md-6">
//             <p>
//               <strong className="h5">Technology</strong> : React, JavaScript
//             </p>
//             <p>
//               <strong className="h5">Project Name </strong>: Blog List
//             </p>
//             <p className="mb-1">
//               <strong className="h5">Reason</strong>The BLOGLIST project was
//               started to learn how data moves between different parts and to
//               become proficient in essential CRUD operations (create, read,
//               update, delete). It provides a practical platform to understand
//               the processes of managing information flow within a system.
//             </p>
//           </div>
//         </div>

//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Projects;


const Projects = () => {
  return (
    <div className="container info border border-info px-2 py-2 rounded-4">
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
          <div className="carousel-item active px-5 pt-5 col-lg-6">
            <p>
              <strong className="h5">Technology</strong> : React, Node.js,
              Express, MongoDB
            </p>
            <p>
              <strong className="h5">Project Name </strong>: Banking
              Administration
            </p>
            <p>
              <strong className="h5">Reason</strong>I worked in banking administration last year and 
              am currently engaged in a project focused on managing employee information and calculating 
              salaries. The project uses React, JavaScript, Bootstrap, and React Context for the frontend,
               with Axios for backend data retrieval. JWT tokens secure access, user accounts are managed 
               with MongoDB, and Express handles server-side operations. Salary calculations occur on the 
               backend, and a date picker facilitates monthly salary viewing.
            </p>
            <a href="http://khl.znova.one/" className="mb-1">
              To view My Project
            </a>
            <p className="mb-0">UserName - white@gmail.com</p>
            <p className="mb-3">Password - 123456</p>

          </div>
          <div className="carousel-item px-5 pt-5 col-lg-6">
            <p>
              <strong className="h5">Technology</strong> : React, JavaScript
            </p>
            <p>
              <strong className="h5">Project Name </strong>: Ecommerce
            </p>
            <p className="mb-1">
              <strong className="h5">Reason</strong>The ecommerce project is
              geared towards understanding the usage of React context and
              functions, along with mastering the practical implementation of
              working with data in components.
            </p>
          </div>
          <div className="carousel-item px-5 pt-5 col-lg-6">
            <p>
              <strong className="h5">Technology</strong> : React, JavaScript
            </p>
            <p>
              <strong className="h5">Project Name </strong>: Blog List
            </p>
            <p className="mb-1">
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
