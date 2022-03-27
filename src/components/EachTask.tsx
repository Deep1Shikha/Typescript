import React from "react";
import { PropsEachTask } from "../interface";
import "../App.css";

const EachTask = ({ element }: PropsEachTask) => {
  return <div className="singleTask">{element.text}</div>;
};

export default EachTask;
