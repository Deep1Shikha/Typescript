import React, { FC } from "react";
import EachTask from "./EachTask";
import { PropsTaskList } from "../interface";
import "../App.css";

const TaskList = ({ allTask, setAllTask }: PropsTaskList) => {
  return (
    <div className="taskList">
      {allTask.map((element, index) => (
        <EachTask element={element} key={index} />
      ))}
    </div>
  );
};

export default TaskList;
