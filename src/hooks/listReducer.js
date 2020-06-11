import { useCallback, useState, useReducer } from "react";

export const TYPES = {
  ON_ADD: "ON_ADD",
  ON_DELETE: "ON_DELETE",
  ON_Done: "ON_Done",
};

const reducer = (state, action) => {
  const { type, index } = action;
  switch (type) {
    case TYPES.ON_ADD: {
      return [...state, { title: action.value }];
    }

    case TYPES.ON_DELETE: {
      return state.reduce((accm, item, _index) => {
        let _item = item;
        if (_index !== index) {
          accm.push(_item);
        }
        return accm;
      }, []);
    }

    case TYPES.ON_Done: {
      return state.reduce((accm, item, _index) => {
        let _item = item;
        if (_index === index) {
          _item = { ..._item, isDone: action.isDone };
        }
        accm.push(_item);
        return accm;
      }, []);
    }

    default:
      throw new Error();
  }
};

export const useList = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return [state, dispatch];
};
