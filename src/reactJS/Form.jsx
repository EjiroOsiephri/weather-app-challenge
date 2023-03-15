import "../reactJS/components/util/grid.scss";
import React, { useState } from "react";

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
          <h1>
            Lat: {props.lat}, lon:{props.lon}
          </h1>
        </div>
        <div className="flexItem">
          <h1>{props.country}</h1>
          <img src={props.image} alt="" />
          <h1>{props.id}</h1>
        </div>
        <div className="flexItem">
          <h1>{props.country}</h1>
          <img src={props.image} alt="" />
          <h1>{props.capital}</h1>
        </div>
      </div>
      <h1 className="h1">Today's Highlight</h1>
      <div className="flexDetails">
        <div className="gridItem">
          <h5>Wind status</h5>
          <h1>
            {props.MPH} <span>mph</span>{" "}
          </h1>
          <h6>{props.windDir}</h6>
        </div>
        <div className="gridItem">
          <h5>Humidity</h5>
          <h1>{props.humidity}%</h1>
        </div>
        <div className="gridItem">
          <h5>Visibility</h5>
          <h1>
            <h1>{props.visibility} miles</h1>
          </h1>
        </div>
        <div className="gridItem">
          <h5>Air pressure</h5>
          <h1>{props.pressure} mb</h1>
        </div>
      </div>
    </div>
  );
}
export default Form;
