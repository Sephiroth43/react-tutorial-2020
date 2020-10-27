import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BugerBuilder/BurgerBuilder'

class App extends Component {
  // state = {
  //   show: true
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000)
  // }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          {/* {this.state.show ? <BurgerBuilder /> : null} */}
          <BurgerBuilder />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
