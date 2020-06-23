
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import 'semantic-ui-sass/semantic.min.sass';
// import './app.sass';

import App from './containers/App';

import createStore from './store';
const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);