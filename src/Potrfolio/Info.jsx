import photo from "../assets/photo1.jpg";
import "./Portfolio.css";

export const Info = () => {
  return (
    <div className="info border border-info px-5 pt-5 rounded-4">
      <img
        src={photo}
        alt=""
        width="150"
        className="border border-light rounded mb-2"
      />{" "}
      <br />
      <label htmlFor="" className="mb-2">
        Date Of Birth : 03/08/1996
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
      <p>
        I have completed a private course in full-stack web development. Before
        this, I used to work in a bank, so I'm new to web development. But I'm
        good at handling stress, learning quickly, and solving problems. I want
        to help make your business better in my own way.
      </p>
    </div>
  );
};
