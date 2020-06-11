import React from "react";
import ListItem from "./listItem";

export default function List({ data, onChange, onDelete }) {
  return data.length ? (
    <div className="box">
      {data.map(({ title, isDone }, index) => {
        return (
          <ListItem
            isDone={isDone}
            onChange={onChange}
            onDelete={onDelete}
            key={index}
            index={index}
          >
            {title}
          </ListItem>
        );
      })}
    </div>
  ) : null;
}
