import React from "react";

export const Part = (props) => {
  return (
    <div>
      <p>
        {props.content.name} | {props.content.exercises}
      </p>
    </div>
  );
};
