import "./ServicesStyles.css";

function ServiceData(props) {
  return (
    <div className="s-card">
      <div className="s-icon">
        <i className={props.icon}></i>
      </div>
      <h4>{props.heading}</h4>
      <hr />
      <p>{props.text}</p>
    </div>
  );
}
export default ServiceData;
