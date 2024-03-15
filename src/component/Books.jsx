import React, { Component } from "react";

export default class Books extends Component {
  render() {
    return (
      <tr className="h-12 odd:bg-lime-100">
        <th>{this.props.id}</th>
        <th>{this.props.title}</th>
        <th>{this.props.author}</th>
        <th>{this.props.year}</th>
      </tr>
    );
  }
}
