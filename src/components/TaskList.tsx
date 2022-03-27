import React, { FC } from "react";
import EachTask from "./EachTask";
import { PropsTaskList } from "../interface";
import "../App.css";

const TaskList = ({ allTask, setAllTask }: PropsTaskList) => {
  return (
    <div className="taskList">
      {allTask.map((element, index) => (
        <EachTask
          element={element}
          key={index}
          allTask={allTask}
          setAllTask={setAllTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
