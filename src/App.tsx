import React, { FC, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TaskList from "./components/TaskList";
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
