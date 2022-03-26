import React, { FC, useState, ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
//import { InputField } from "./components/InputField";
import EachTask from "./components/EachTask";

interface IData {
  task: string;
  point: number;
  uuid: number;
}

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [point, setPoint] = useState<number>(0);
  const [data, setData] = useState<IData[]>([]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") setTask(event.target.value);
    else setPoint(Number(event.target.value));
  };

  const addDataHandler = (): void => {
    setData([...data, { task: task, point: point, uuid: Date.now() }]);
    setTask("");
    setPoint(0);
    console.log(data);
  };

  const deleteTask = (receivedId: number): void => {
    setData(data.filter((item) => item.uuid != receivedId));
  };

  return (
    <div className="App">
      Todo list using Typescript
      <div>
        <input
          name="task"
          placeholder="task..."
          onChange={changeHandler}
          value={task}
        />
        <input
          name="weight"
          placeholder="story points ..."
          onChange={changeHandler}
          value={point}
        />
        <button onClick={addDataHandler}>Add</button>
      </div>
      <div>
        {data.map((element: IData, key: number) => {
          return (
            <EachTask key={key} element={element} deleteTask={deleteTask} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
