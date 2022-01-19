import React from "react";
import { Part } from "./Part";

export const Content = (props) => {
  return (
    <div>
      <Part content={props.parts[0]} />
      <Part content={props.parts[1]} />
      <Part content={props.parts[2]} />
    </div>
  );
};
