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
        <button onClick={displayInput}>Search for places</button>
        {show ? <img src={props.image} alt="" /> : <img src={Sunny} alt="" />}

        <div className="form">
          {show && (
            <input ref={myRef} onChange={handleInputChange} type="text" />
          )}
          {show && <button onClick={props.onSearch}>Search</button>}
          {show && <FaTimes onClick={changeIcon} />}
        </div>
        <h1>
          {props.temp}
          <span>C</span>
        </h1>
      </div>
    </div>
  );
}
export default Main;
