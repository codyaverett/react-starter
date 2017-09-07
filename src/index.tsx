import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { App } from './App';
import { registerServiceWorker } from './registerServiceWorker';

import { entryReducer } from './reducers';
import { MainStore } from './stores';

import './index.css';

let store = createStore<MainStore>(entryReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
