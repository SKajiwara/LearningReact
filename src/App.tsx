import React from 'react';
// Redux
import { Provider } from 'react-redux';
import { store } from './store/store';
// Side Menu UI
import { Header, SideMenu } from './components';
// Routing / Pages
import Routing from './Routing';
// Routing
import { BrowserRouter as Router } from 'react-router-dom'

function App(): JSX.Element {
  // Provider provides the store object to Header, Side Menu and all pages.
  return (
    <Provider store={store}>
      { /* Router contains all routes (pages) in Routing component */ }
      <Router>
        {/* Header */}
        <Header />
        {/* Side Menu */}
        <SideMenu />
        {/* Routing */}
        <Routing />
      </Router>
    </Provider>
  );
}

export default App;
