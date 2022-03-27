import React from "react";

export interface ITask {
  text: string;
  uuid: number;
}

export interface PropsInputField {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  addHandler: (event: React.FormEvent) => void;
}

export interface PropsTaskList {
  allTask: ITask[];
  setAllTask: React.Dispatch<React.SetStateAction<ITask[]>>;
}
export interface PropsEachTask {
  key: number;
  element: ITask;
}
