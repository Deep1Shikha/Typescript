import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { PropsEachTask } from "../interface";

const EachTask = ({ element, allTask, setAllTask }: PropsEachTask) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editContent, setEditContent] = useState<string>(element.text);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const doneHandler = (event: React.SyntheticEvent, uuid: number) => {
    event.preventDefault();
    setAllTask(
      allTask.map((element) =>
        element.uuid === uuid
          ? { ...element, isDone: !element.isDone }
          : element
      )
    );
  };

  const deleteHandler = (event: React.SyntheticEvent, uuid: number) => {
    event.preventDefault();
    setAllTask(allTask.filter((element) => element.uuid !== uuid));
  };

  const editHandler = (event: React.FormEvent, uuid: number) => {
    event.preventDefault();
    setAllTask(
      allTask.map((element) =>
        element.uuid === uuid ? { ...element, text: editContent } : element
      )
    );
    setEdit(false);
  };

  return (
    <form
      className="singleTask"
      onSubmit={(event) => editHandler(event, element.uuid)}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
      ) : element.isDone ? (
        <s>{element.text}</s>
      ) : (
        <span>{element.text}</span>
      )}

      <button
        onClick={() => {
          if (!edit && !element.isDone) {
            setEdit(!edit);
          }
        }}
        type="button"
      >
        Edit
      </button>
      <button
        onClick={(event) => doneHandler(event, element.uuid)}
        type="button"
      >
        Done
      </button>
      <button
        onClick={(event) => deleteHandler(event, element.uuid)}
        type="button"
      >
        Delete
      </button>
    </form>
  );
};

export default EachTask;
