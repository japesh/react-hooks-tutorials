import React, { useCallback, useState } from "react";
import AddTodo from "../components/addTodo";
import List from "../components/list";

export default function Exercise1() {
  const [list, setList] = useState([]);

  const onAdd = useCallback(({ value }) => {
    setList((_list) => {
      return [..._list, { title: value }];
    });
  }, []);

  const onTodoStateChange = useCallback(({ index, isDone: newIsDone }) => {
    setList((_list) => {
      return _list.reduce((accm, item, _index) => {
        let _item = item;
        if (_index === index) {
            _item = { ..._item, isDone: newIsDone };
        }
        accm.push(_item);
        console.log(accm,_index, index, newIsDone)
        return accm;
      }, []);

    });
  }, []);

  return (
    <div className="box">
      <AddTodo onAdd={onAdd} />
      <List data={list} onChange={onTodoStateChange} />
    </div>
  );
}
