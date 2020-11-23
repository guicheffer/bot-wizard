import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import './commons/styles/base.scss';

import { store } from './store/store';
import * as serviceWorker from './serviceWorker';
import BotWizardApp from './components/MainApp/MainApp';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BotWizardApp />
    </Provider>
  </React.StrictMode>,

  document.getElementById('bot-wizard-app')
);

serviceWorker.unregister();
