import React, { Component } from "react";

export default class Centerdiv extends Component {
  //  react 16   function compo static UI - after react 16 fb react team introduce the function behavior hook
  //   hook is different types of functions they provide some type of functionality to functional components

  //   mounting , updating , unmounting

  constructor() {
    super();
    this.state = { username: "Class Components" };
  }

//    1111 2222 -- process 

  render() {
    return (
      <div className="w-1/2 h-1/2 bg-white shadow-orange-50 rounded">
        {this.state.username}
      </div>
    );
  }
}
