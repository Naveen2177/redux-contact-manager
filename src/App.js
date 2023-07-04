import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Counter from './Components/counter';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;

