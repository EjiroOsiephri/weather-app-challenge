import { useRef, useState, useEffect } from "react";
import "../components/global/boilerplate.scss";
import Sunny from "./images/LightCloud.png";
import { FaTimes, FaMapMarkerAlt } from "react-icons/fa";

function Main(props) {
  const [show, setShow] = useState(false);

  function displayInput() {
    setShow((prevShow) => {
      return (prevShow = !prevShow);
    });
  }
  const myRef = useRef(null);

  useEffect(() => {
    // Set the background color to black when show is true
    if (show) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white"; // Reset to default color
    }
  }, [show]);

  function handleInputChange(e) {
    props.onInputChange(e.target.value);
  }

  function changeIcon() {
    setShow((prevShow) => {
      return (prevShow = !prevShow);
    });
  }

  const dateTime = new Date(`${props.localtime}`);
  const year = dateTime.getFullYear();
  const month = dateTime.toLocaleString("default", { month: "long" });
  const day = dateTime.getDate();
  const hour = dateTime.getHours();
  const minute = dateTime.getMinutes();

  return (
    <div className="allDivs">
      <div className="sideDiv">
        <button className="searchBtn" onClick={displayInput}>
          Search for places
        </button>
        {show ? <img src={props.image} /> : <img src={props.image} />}

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
            {props.temp}
            <span>°C</span>
          </h2>
        )}
        {show ? (
          <h1>{props.conditionText}</h1>
        ) : (
          <h2 className="conditionText">{props.conditionText}</h2>
        )}
        <div className="finalLocation">
          <h2>
            Today: {day} {month}
          </h2>
          <h2>
            <span>
              {" "}
              <FaMapMarkerAlt />
            </span>{" "}
            {props.location}
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Main;
