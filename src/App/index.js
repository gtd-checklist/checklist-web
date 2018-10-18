import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';

import { HelloWorld } from './components/Hello';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <HelloWorld />
  </Provider>
);

export default App;
