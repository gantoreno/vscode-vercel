import React, { Component } from "react";

class App extends Component {
  state = {
    title: "Vercel",
    description: "Vercel's (unofficial) colorscheme",
  };

  render() {
    const { title, description } = this.state;

    return (
      <div className="App">
        <h1>{title}</h1>
        <hr />
        <p>{description}</p>
      </div>
    );
  }
}

export default App;
