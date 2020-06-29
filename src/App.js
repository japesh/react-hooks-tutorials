import React from "react";
import LeftNavigation from "./components/leftNavigation";
import SplittingLogic from "./splittingLogic";
import Exercise1 from "./exercise1";
import Exercise2 from "./exercise2";
import Exercise3 from "./exercise3";
import Exercise4 from "./exercise4";
import "./App.css";

const LINKS = [
  {
    title: "SplittingLogic",
    Component: SplittingLogic
  },
  {
    title: "Exercise 1",
    Component: Exercise1,
  },
  {
    title: "Exercise 2",
    Component: Exercise2,
  },
  {
    title: "Exercise 3",
    Component: Exercise3,
  },
  {
    title: "Exercise 4",
    Component: Exercise4,
  },
];

function App() {
  return (
    <div className="App">
      <LeftNavigation links={LINKS} defaultSelected={0}/>
    </div>
  );
}

export default App;
