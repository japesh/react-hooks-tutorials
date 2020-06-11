import React from "react";
import LeftNavigation from "./components/leftNavigation";
import Exercise1 from "./exercise1";
import "./App.css";

const LINKS = [
  {
    title: "Exercise 1",
    Component: Exercise1,
  },
  {
    title: "Exercise 2",
    Component: Exercise1,
  },
];

function App() {
  return (
    <div className="App">
      <LeftNavigation links={LINKS} />
    </div>
  );
}

export default App;
