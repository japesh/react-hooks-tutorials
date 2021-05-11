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

// container/ functional components/ class component
// hooks vs class screen should be more intutive
// how to implement life cycle events
// remove sample for practice link


// discuss it with Balram 

// 1st session
// basic 
// 2nd session
// custom hooks
// use Reducer
// discuss pros and cons of useReducer like easy to testing and everything
// how to maintain whole state
// problem statement of custom hook from rippling code base