import "./Portfolio.css";

const View = () => {
  return (
    <div className="info  border-info px-5 pt-3 rounded-4 contact text-white pb-2">
      <h1 className="text-center h1 mx-5 my-5"> Hello!, Nice to meet You.</h1>
      <label className="h1 ms-5  me-3 rounded-5 border border-dark px-3">
        <i className="fa-brands fa-react"></i>
      </label>
      <label className="h1 mx-3 rounded-5 border border-dark px-3">
        <i className="fa-brands fa-node"></i>
      </label>
      <label className="h1 mx-3 rounded-5 border border-dark px-3">
        <i className="fa-brands fa-php"></i>{" "}
      </label>
      <label className="h1 mx-3 rounded-5 border border-dark px-3">
        <i className="fa-brands fa-laravel"></i>
      </label>
      <label className="h1 mx-3 rounded-5 border border-dark px-3">
        <i className="fa-brands fa-mdb"></i>
      </label>
      <label className="h1 mx-3 rounded-5 border border-dark px-3">
        <i className="fa-brands fa-github"></i>{" "}
      </label>
      <h1 className="text-center h1 mx-5 my-5">
        Thank you for your time and consideration.
      </h1>
    </div>
  );
};

export default View;
