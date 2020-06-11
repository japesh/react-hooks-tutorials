import { useCallback, useState } from "react";

export const useList = () => {
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
          return accm;
        }, []);
      });
    }, []);

    const onDelete = useCallback(({ index }) => {
      setList((_list) => {
        return _list.reduce((accm, item, _index) => {
          let _item = item;
          if (_index !== index) {
            accm.push(_item);
          }
          return accm;
        }, []);
      });
    }, []);
    return [list, { onAdd, onTodoStateChange, onDelete }];
  };
  