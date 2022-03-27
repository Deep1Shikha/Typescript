import React, { FC, useState, ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";

import TaskList from "./components/TaskList";
import InputField from "./components/InputField";
import { ITask } from "./interface";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [allTask, setAllTask] = useState<ITask[]>([]);

  const addHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (task) {
      setAllTask([...allTask, { text: task, uuid: Date.now(), isDone: false }]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <header className="header">Todo list using Typescript</header>
      <InputField task={task} setTask={setTask} addHandler={addHandler} />
      <TaskList allTask={allTask} setAllTask={setAllTask} />
    </div>
  );
};

export default App;
