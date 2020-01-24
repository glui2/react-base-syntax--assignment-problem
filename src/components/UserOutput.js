import React from "react";

const userOutput = props => {
  return (
    <div>
      <p>This is paragraph 1, written by {props.username}</p>
      <p>This is paragraph 2</p>
    </div>
  );
};

export default userOutput;
