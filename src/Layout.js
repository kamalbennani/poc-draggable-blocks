import React, { Component } from 'react';

import "./Layout.css";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <div className="Layout__Header"></div>
        <div className="Layout__container">
          <div className="Layout__Sidebar"></div>
          <div className="Layout__Content">
            {this.props.children}
          </div>
        </div>        
      </div>
    )
  }
}