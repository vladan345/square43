import React from "react";
import { Link } from "react-router-dom";
import "./ProjectModule.css";

function ProjectModule(props) {
  console.log();
  return (
    <div className="ProjectModule" style={props.style}>
      <h2>{props.project.id}</h2>
      <Link to={window.location.pathname + "/" + props.project.id}>
        See project
      </Link>
    </div>
  );
}

export default ProjectModule;
