import React from 'react';
import Muuri from 'muuri';

import "./Grid.css";

export default class Grid extends React.Component {
  componentDidMount() {
    const grid = new Muuri('.GridMuuri', {
      dragEnabled: true,
      dragStartPredicate: {
        distance: 0,
        delay: 0,
        handle: '.GridItem--handle'
      }
    });
    window.addEventListener('load', function () {
      grid.refreshItems().layout();
    });
  }

  render() {
    return (
      <div className="GridMuuri">
        <div className="item Item col-xs-12 col-lg-6">
          <div className="item-content Item__Container">
            <div className="Item__Header">
              <i className="GridItem--handle fa fa-icon fa-lg fa-arrows"/>
            </div>
            <div className="Item__Content">1</div>
          </div>
        </div>
        <div className="item Item col-xs-12 col-lg-6">
          <div className="item-content Item__Container">
            <div className="Item__Header">
              <i className="GridItem--handle fa fa-icon fa-lg fa-arrows"/>
            </div>
            <div className="Item__Content">2</div>
          </div>
        </div>
        <div className="item Item col-xs-12">
          <div className="item-content Item__Container">
            <div className="Item__Header">
              <i className="GridItem--handle fa fa-icon fa-lg fa-arrows"/>
            </div>
            <div className="Item__Content">3</div>
          </div>
        </div>
        <div className="item Item col-xs-12 Item--fullHeight">
          <div className="item-content Item__Container">
            <div className="Item__Header">
              <i className="GridItem--handle fa fa-icon fa-lg fa-arrows"/>              
            </div>
            <div className="Item__Content">4</div>
          </div>
        </div>
      </div>
    )
  }
}