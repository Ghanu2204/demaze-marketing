import "./SolutionsStyles.css";

function SolutionData(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img alt="image" src={props.image} />
      </div>
      <h2>{props.heading}</h2>
    </div>
  );
}
export default SolutionData;
