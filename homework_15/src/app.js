import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';
import ColorsList from './features/Components/ColorsList/ColorsList'

class App extends Component {
  render() {
    return (
      <ColorsList/>
    );
  }
}

// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);