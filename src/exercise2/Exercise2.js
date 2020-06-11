import React from "react";
import AddTodo from "../components/addTodo";
import List from "../components/list";
import { useList } from "../hooks/list";

export default function Exercise2() {
  const [list, { onAdd, onTodoStateChange }] = useList();

  return (
    <div className="box">
      <AddTodo onAdd={onAdd} />
      <List data={list} onChange={onTodoStateChange} />
    </div>
  );
}
