import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import Router from './router'
import store from './store/configureStore'

ReactDOM.render(
    <Provider store={store}>
        <Router></Router>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker()
