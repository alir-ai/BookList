import React, { Component } from "react";
import Header from "./component/Header";
import AddForm from "./component/AddForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddForm />
      </div>
    );
  }
}
