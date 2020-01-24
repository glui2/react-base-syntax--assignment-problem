import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="Output">
      <p>This is paragraph 1, written by {props.username}</p>
      <p>This is paragraph 2</p>
    </div>
  );
};

export default userOutput;
