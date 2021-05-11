import React, { useCallback, useState } from "react";
import AddTodo from "./AddTodo";

// useState

export default function Practice() {
  const [list, setList] = useState([]);
  const onSubmit = useCallback(({ value }) => {
    console.log("value", value);
    setList((_list) => {
      return [..._list, { title: value }];
    });
  }, []);
    console.log("list", list)
  return <AddTodo onSubmit={onSubmit} />;
}
