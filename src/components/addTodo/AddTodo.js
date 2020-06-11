import React, { useState, useCallback } from "react";
import "./AddTodo.css";

const blockName = "addTodo";

export default function AddTodo({ onAdd }) {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    onAdd({ value });
    setValue("");
  }, [value, onAdd]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onClick();
      }
    },
    [onClick]
  );

  return (
    <div className={`${blockName} box`}>
      <input
        onChange={onChange}
        className={`${blockName}__input`}
        type="text"
        value={value}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick} className={`${blockName}__button`}>
        Add
      </button>
    </div>
  );
}
