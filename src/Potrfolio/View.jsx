const View = () => {
  return (
    <div className="container border-info px-5 pt-3 rounded-4 contact text-white px-5 py-5 mb-5">
      <h1 className="text-center h1 mx-5 my-5"> Hello!, Nice to meet You.</h1>
      <div className="row justify-content-center my-5">
        <div className="col-sm-auto col-md-auto col-lg-auto">
          <label className="h1 ms-3 me-3 rounded-5 border border-dark px-3">
            <i className="fab fa-react"></i>
          </label>
        </div>
        <div className="col-sm-auto col-md-auto col-lg-auto">
          <label className="h1 mx-3 rounded-5 border border-dark px-3">
            <i className="fab fa-node"></i>
          </label>
        </div>
        <div className="col-sm-auto col-md-auto col-lg-auto">
          <label className="h1 mx-3 rounded-5 border border-dark px-3">
            <i className="fab fa-php"></i>{" "}
          </label>
        </div>
        <div className="col-sm-auto col-md-auto col-lg-auto">
          <label className="h1 mx-3 rounded-5 border border-dark px-3">
            <i className="fab fa-laravel"></i>
          </label>
        </div>
        <div className="col-sm-auto col-md-auto col-lg-auto">
          <label className="h1 mx-3 rounded-5 border border-dark px-3">
            <i className="fab fa-mdb"></i>
          </label>
        </div>
        <div className="col-sm-auto col-md-auto col-lg-auto">
          <label className="h1 mx-3 rounded-5 border border-dark px-3">
            <i className="fab fa-github"></i>{" "}
          </label>
        </div>
      </div>
    </div>
  );
};

export default View;
