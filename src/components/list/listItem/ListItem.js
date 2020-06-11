import React, { useCallback } from "react";
import "./ListItem.css";

const blockName = "listItem";

export default function ListItem({
  onChange,
  children,
  isDone = false,
  index,
}) {
  const _onChange = useCallback(
    (e) => {
      console.log("index", index, e.target.checked);
      onChange({ isDone: e.target.checked, index });
    },
    [index, onChange]
  );
  return (
    <div className={blockName}>
      {children} <input type="checkbox" checked={isDone} onChange={_onChange} />
    </div>
  );
}
