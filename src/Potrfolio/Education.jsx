import "./Portfolio.css";
const Education = () => {
  return (
    // <div className="info border border-info px-5 pt-5 rounded-4">
    <div className="container info border border-info pt-5 pb-5 rounded-4">
      <div className=" mb-5 border border-dark px-5 pt-5 rounded-start-pill education text-white">
        <h4>
          <strong className="">Diploma in Computer Studies </strong>(2017)
        </h4>
        <p className="text-center ">Pyay University, Pyay</p>
        <hr />
      </div>
      <div className="mb-5 border border-dark px-5 pt-5 rounded-start-pill education text-white ">
        <h4>
          <strong>Bachelor of Science (Zoology)</strong>(2016)
        </h4>
        <p className="text-center ">Pyay University, Pyay</p>
        <hr />
      </div>
    </div>
  );
};

export default Education;
