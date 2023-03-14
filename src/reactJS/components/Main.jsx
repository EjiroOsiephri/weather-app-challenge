import { useRef, useState } from "react";
import "../components/global/boilerplate.scss";
import Sunny from "./images/LightCloud.png";
import { FaTimes } from "react-icons/fa";

function Main(props) {
  const [show, setShow] = useState(false);

  function displayInput() {
    setShow((prevShow) => {
      return (prevShow = !prevShow);
    });
  }
  const myRef = useRef(null);

  function handleInputChange(e) {
    props.onInputChange(e.target.value);
  }

  function changeIcon() {
    setShow((prevShow) => {
      return (prevShow = !prevShow);
    });
  }

  return (
    <div className="allDivs">
      <div className="sideDiv">
        <button className="searchBtn" onClick={displayInput}>
          Search for places
        </button>
        {show ? <img src={props.image} alt="" /> : <img src={Sunny} alt="" />}

        <div className="form">
          {show && (
            <input
              placeholder="Search Location"
              ref={myRef}
              onChange={handleInputChange}
              type="text"
            />
          )}
          {show && <button onClick={props.onSearch}>Search</button>}
          {show && <FaTimes className="times" onClick={changeIcon} />}
        </div>
        {show ? (
          <h1 className="tempText">{props.temp}</h1>
        ) : (
          <h2 className="tempDegree">
            30<span>°C</span>
          </h2>
        )}
        {show ? (
          <h1>{props.conditionText}</h1>
        ) : (
          <h2 className="conditionText">Rainy Day</h2>
        )}
      </div>
    </div>
  );
}
export default Main;
