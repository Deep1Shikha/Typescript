import React, { FC } from "react";

interface IData {
  task: string;
  point: number;
  uuid: number;
}
interface Props {
  element: IData;
  deleteTask(receivedId: number): void;
}
const EachTask = ({ element, deleteTask }: Props) => {
  return (
    <div>
      {element.task}
      {element.point}
      <button onClick={() => deleteTask(element.uuid)}>X</button>
    </div>
  );
};

export default EachTask;
