import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    name: "Ben",
  };
  
  handleClick = () => this.setState({ name: "Joe" });

  render() {
    return (
      <div className="App" onClick={this.handleClick}>
        {this.state.name}
      </div>
    );
  }
}

export default App;
