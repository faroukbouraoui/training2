import React, { Component } from "react";

import "./App.css";
import classnames from "classnames";

class App extends Component {
  /*  state = {
    active: true,
  };
  render() {
    const style = { color: "white", "font-weight": "bold" };
    if (this.state.active) {
      style.color = "yellow";
    }
    return (
      <div>
        <div
          className={this.state.active ? "bg-green" : "bg-red"}
          style={style}
        >
          test
        </div>
        <button
          onClick={() => {
            this.setState({ active: !this.state.active });
          }}
        >
          change active
        </button>
      </div>
    );
  }
}
*/
  /* render() {
   let classes = "";

    if (true) classes += "green ";
    if (true) classes += "whiteText ";
    if (true) classes += "boldText ";
    // or
    classes = [];

    if (true) classes.push("green");
    if (true) classes.push("whiteText");
    if (true) classes.push("boldText");
    return (
      <div>
        <div className={classes.join(" ")}>Test</div>
      </div>
    );
  }
}
*/
  render() {
    let classes = classnames({
      green: 1 > 0,
      whiteText: 2 < 4,
      boldText: 8 == 8,
    });

    return (
      <div>
        <div className={classes}>Test</div>
      </div>
    );
  }
}
export default App;
