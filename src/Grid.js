import React, { Component } from 'react';
import _ from 'lodash';
import { Responsive, WidthProvider } from 'react-grid-layout';

import "./Grid.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class Grid extends Component {
  static defaultProps = {
    className: "layout",
    compactType: "vertical",
    isResizable: false,
    rowHeight: 350,
    onLayoutChange: function() {},
    cols: {lg: 2, md: 2, sm: 6, xs: 2, xxs: 2},
    useCSSTransforms: true,
    layouts: {
      lg: [{
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        i: "0",
        static: false,
      }, {
        x: 1,
        y: 0,
        w: 1,
        h: 1,
        i: "1",
        static: false,
      }, {
        x: 0,
        y: 1,
        w: 2,
        h: 1,
        i: "2",
        static: false,
      }, {
        x: 0,
        y: 2,
        w: 1,
        h: 1,
        i: "3",
        static: false,
      }, {
        x: 1,
        y: 2,
        w: 1,
        h: 1,
        i: "4",
        static: false,
      }, {
        x: 0,
        y: 3,
        w: 2,
        h: 1,
        i: "5",
        static: false,
      }]
    }
  };

  generateDOM() {
    return _.map(this.props.layouts.lg, function(l, i) {
      return (
        <div className="Item" key={i}>
          <div className="Item__Container">
            <div className="Item__Header"></div>
            <div className="Item__Content">{i}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log('this.props.layouts.lg', this.props.layouts.lg);
    return (
      <ResponsiveReactGridLayout {...this.props}>
        {this.generateDOM()}
      </ResponsiveReactGridLayout>
    )
  }
}

function generateLayout() {
  return _.map(_.range(0, 25), function(item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05
    };
  }).slice(0, 1);
}
