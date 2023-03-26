import React from "react";
import "../App.css";
import { PropsTaskList } from "../interface";
import EachTask from "./EachTask";

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
