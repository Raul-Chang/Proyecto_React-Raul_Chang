import React from "react";
import "./flexx.css";

function Flexx(props) {
  return <div className="flex">{props.children}</div>;
}

export default Flexx;
