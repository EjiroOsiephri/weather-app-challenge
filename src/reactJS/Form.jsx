import "../reactJS/components/util/grid.scss";

function Form(props) {
  return (
    <div className="secondDiv">
      <div className="flexContainer">
        <button>F</button>
        <button>C</button>
      </div>
      <div className="flexBox">
        <div className="flexItem">
          <h1>{props.country}</h1>
          <img src={props.image} alt="" />
          <h1>{props.region}</h1>
        </div>
        <div className="flexItem">
          <h1>{props.country}</h1>
          <img src={props.image} alt="" />
          <h1>{props.region}</h1>
        </div>
        <div className="flexItem">
          <h1>{props.country}</h1>
          <img src={props.image} alt="" />
          <h1>{props.region}</h1>
        </div>
        <div className="flexItem">
          <h1>{props.country}</h1>
          <img src={props.image} alt="" />
          <h1>{props.region}</h1>
        </div>
      </div>
    </div>
  );
}
export default Form;
