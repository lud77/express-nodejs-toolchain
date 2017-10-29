const React = require('react');
const { createStore } = require('redux');
const { hydrate } = require('react-dom');

const App = require('../components/App.jsx');
const reducers = require('../reducers');

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(reducers, preloadedState);

hydrate(
    <App store={store} />,
    document.getElementById('root')
);
