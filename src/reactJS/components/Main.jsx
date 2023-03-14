import { useRef, useState } from "react";
import "../components/global/boilerplate.scss";
import Sunny from "./images/LightCloud.png";

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
        </div>
      </div>
    </div>
  );
}
export default Main;
