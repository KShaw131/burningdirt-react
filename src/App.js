import React, { Component } from "react";
import "./App.css";
import { Home } from "./containers/Home";
import { MyAppBar } from "./containers/MyAppBar";
import { MyFooter } from "./containers/MyFooter";

class App extends Component {
  state = {
    ninjas: [
      { name: "Kelly", age: "26", belt: "black", id: "1" },
      { name: "Test", age: "27", belt: "blue", id: "2" },
      { name: "Test2", age: "28", belt: "green", id: "3" }
    ]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyAppBar />
          <Home />
          <MyFooter />
        </header>
      </div>
    );
  }
}

export default App;
