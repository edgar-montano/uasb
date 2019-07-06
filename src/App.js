import React, { Component } from "react";
import ArmorTable from "./components/ArmorTable";
// import NameList from "./data/console.json";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ArmorTable />;
  }
}

export default App;
