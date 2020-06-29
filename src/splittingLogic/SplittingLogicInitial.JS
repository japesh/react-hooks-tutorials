import React from "react";

export default class Counter extends React.Component {
  state = { counter: 0 };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(({ counter }) => ({ counter: counter + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { counter } = this.state;
    return <div className="box">Counter Current Value: {counter}</div>;
  }
}
