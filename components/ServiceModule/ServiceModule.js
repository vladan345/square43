import React from "react";
import { Link } from "react-router-dom";
import "./ServiceModule.css";

function ServiceModule(props) {
  //Transition (doesn't work)
  const styleTarget = (e) => {
    let target = e.target.parentNode;
    target.style.transform = "scale(100)";
  };

  return (
    <div className="ServiceModule" style={props.style}>
      <div className="top">
        <h2>{props.service.name}</h2>
        <p>{props.service.description}</p>
      </div>
      <Link onClick={styleTarget} to={"/services/" + props.service.id}>
        See projects
      </Link>
    </div>
  );
}

export default ServiceModule;
