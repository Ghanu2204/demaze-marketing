import "./SolutionsStyles.css";

function SolutionData(props) {
  return (
    <div className="card">
      <div className="card-icon">
        <i className={props.icon}></i>
      </div>
      <h2>{props.heading}</h2>
    </div>
  );
}
export default SolutionData;
