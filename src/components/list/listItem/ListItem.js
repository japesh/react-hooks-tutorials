import React, { useCallback } from "react";
import "./ListItem.css";

const blockName = "listItem";

export default function ListItem({
  onChange,
  children,
  index,
  onDelete,
  isDone = false,
}) {
  const _onChange = useCallback(
    (e) => {
      onChange({ isDone: e.target.checked, index });
    },
    [index, onChange]
  );
  const _onDelete = useCallback(() => {
    onDelete({ index });
  }, [index, onDelete]);
  return (
    <div className={blockName}>
      {children}{" "}
      {onChange && (
        <input type="checkbox" checked={isDone} onChange={_onChange} />
      )}
      {onDelete && <button onClick={_onDelete}>Delete</button>}
    </div>
  );
}
