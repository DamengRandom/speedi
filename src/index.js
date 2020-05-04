import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import * as serviceWorker from './serviceWorker';
import StoreProvider from "./states/StoreProvider";

import Speedi from './components/templates/Speedi';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider><Speedi /></StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
