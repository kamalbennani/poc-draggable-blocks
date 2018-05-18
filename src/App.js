import React, { Component } from 'react';
import Layout from './Layout';
import MuuriGrid from './MuuriGrid';
import RGLGrid from './Grid';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

class App extends Component {
  render() {
    return (
      <Layout>
        {/*<RGLGrid />*/}
        <MuuriGrid />
      </Layout>
    );
  }
}

export default App;
