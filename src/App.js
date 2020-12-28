import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import StandardsBuilder from './containers/StandardsBuilder/StandardsBuilder';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <StandardsBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
