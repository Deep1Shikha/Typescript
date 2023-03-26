import React, { useRef } from "react";
import "../App.css";
import { PropsInputField } from "../interface";

const InputField = ({ task, setTask, addHandler }: PropsInputField) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(event) => {
        addHandler(event);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        className="input__box"
        placeholder="Your text here..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="input__button" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
