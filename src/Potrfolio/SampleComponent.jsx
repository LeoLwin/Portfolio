import photo from "../assets/photo1.jpg";

const SampleComponent = () => {
  return (
    <div className="container info border border-info pt-5 pb-5 rounded-4">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="text-start">
          <img
            src={photo}
            alt=""
            width={150}
            className="border border-light rounded mb-2"
          />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-8 mt-2">
          <div className="text-start">
          <label htmlFor="" className="mb-2 fs-6">
            Date Of Birth : Aug/1996
          </label>
          <br />
          <label htmlFor="" className="mb-2">
            NRC : 7/PaTaTa(N)119350
          </label>
          <br />
          <label htmlFor="" className="mb-2">
            Availability : Immediately
          </label>
          <br />
          <label htmlFor="" className="mb-2">
            Gender : Male
          </label>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="text-start">
          Currently a programmer at Studio AMK Company, previously in banking. I have completed a full-stack web development course. Skilled at stress management, quick learning, and problem-solving. Eager to contribute and enhance our business.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleComponent;
