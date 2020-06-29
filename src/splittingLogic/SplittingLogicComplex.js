import React from "react";

export default class Counter extends React.Component {
  state = { counter: 0, lapList: [] };

  constructor(props) {
    super(props);
    this.onBodyClick = this.onBodyClick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(({ counter }) => ({ counter: counter + 1 }));
    }, 1000);
    document.body.addEventListener("click", this.onBodyClick);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    document.body.removeEventListener("click", this.onBodyClick);
  }

  onBodyClick() {
    this.setState(({ counter, lapList }) => {
      return { lapList: [...lapList, counter] };
    });
  }

  render() {
    const { counter, lapList } = this.state;
    return (
      <div className="box">
        <div className="box">Counter Current Value: {counter}</div>
        {lapList.map((count, index) => {
          return (
            <div >
              My Lap: {index + 1} My Count: {count}
            </div>
          );
        })}
      </div>
    );
  }
}
