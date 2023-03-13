import { useState } from "react";
import "../components/global/boilerplate.scss";

function Main(props) {
  const [show, setShow] = useState(false);

  function displayInput() {
    setShow((prevShow) => {
      return (prevShow = !prevShow);
    });
  }

  return (
    <div className="allDivs">
      <div className="sideDiv">
        <button onClick={displayInput}>Search for places</button>
        <img src={props.image} alt="" />

        <form>
          <div className="form">
            {show && <input type="text" />}
            {show && <button>Search</button>}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Main;
