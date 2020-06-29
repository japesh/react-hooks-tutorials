import React, { useEffect, useState } from "react";

function useComponentState() {
  const [componentState, setState] = useState({ counter: 0, lapList: [] });

  useEffect(() => {
    const timer = setInterval(() => {
      setState(({ counter, lapList }) => ({ counter: counter + 1, lapList }));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    const onBodyClick = () => {
      setState(({ counter, lapList }) => {
        return { counter: counter, lapList: [...lapList, counter] };
      });
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  });

  return [componentState];
}

export default function Counter() {
  const [{ counter, lapList }] = useComponentState();
  return (
    <div className="box">
      <div className="box">Counter Current Value: {counter}</div>
      {lapList.map((count, index) => {
        return (
          <div>
            My Lap: {index + 1} My Count: {count}
          </div>
        );
      })}
    </div>
  );
}
