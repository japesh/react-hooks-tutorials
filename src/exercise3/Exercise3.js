import React from "react";
import AddTodo from "../components/addTodo/AddTodo";
import List from "../components/list/List";
import { useList } from "../hooks/list";

export default function Exercise1() {
  const [list, { onAdd, onDelete }] = useList();

  return (
    <div className="box">
      <AddTodo onAdd={onAdd} />
      <List data={list} onDelete={onDelete} />
    </div>
  );
}
