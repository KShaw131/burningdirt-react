import React, { Component } from "react";
import "./App.css";
import { Home } from "./containers/Home";
import { MyAppBar } from "./containers/MyAppBar";
import { MyFooter } from "./components/MyFooter";

class App extends Component {
  state = {};

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
