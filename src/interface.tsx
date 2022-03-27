import React from "react";

export interface ITask {
  text: string;
  uuid: number;
  isDone: boolean;
}

export interface PropsInputField {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  addHandler: (event: React.FormEvent) => void;
}

export interface PropsTaskList {
  allTask: ITask[];
  setAllTask: React.Dispatch<React.SetStateAction<ITask[]>>;
  // setTask: React.Dispatch<React.SetStateAction<string>>;
}
export interface PropsEachTask {
  element: ITask;
  allTask: ITask[];
  setAllTask: React.Dispatch<React.SetStateAction<ITask[]>>;
  // setTask: React.Dispatch<React.SetStateAction<string>>;
}
