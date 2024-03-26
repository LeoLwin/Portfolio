import "./Portfolio.css";
import znova1 from "../assets/znova1.png";
const AchievementAndCerti = () => {
  return (
    <div className="achieve border border-info rounded-4 text-center">
      <img src={znova1} alt="" className="img-fluid mt-3 rounded-4 mb-2 border border-black col-md-12" />
      <h4>Full Stack Web Development One-on One Class</h4>
      <a href="https://znova.one/courses/1/Full-Stack-Web-Development-One-on-One-Class">
        https://znova.one/
      </a>
    </div>
  );
};

export default AchievementAndCerti;
