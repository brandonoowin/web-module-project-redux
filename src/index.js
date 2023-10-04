import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore} from 'redux';
import { Provider, connect } from 'react-redux';


import reducer from './reducers';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
