import React, { useCallback } from "react";
import AddTodo from "../components/addTodo/AddTodo";
import List from "../components/list/List";
import { useList, TYPES } from "../hooks/listReducer";

export default function Exercise4() {
  const [list, dispatch] = useList();

  const onAdd = useCallback(({ value }) => {
    dispatch({ type: TYPES.ON_ADD, value });
  }, []);
  const onDelete = useCallback(({ index }) => {
    dispatch({ type: TYPES.ON_DELETE, index });
  }, []);

  return (
    <div className="box">
      <AddTodo onAdd={onAdd} />
      <List data={list} onDelete={onDelete} />
    </div>
  );
}
