const React = require('react');
const { Provider } = require('react-redux');

const Counter = require('./Counter.jsx');

module.exports = ({ store }) => (
    <Provider store={store}>
        <Counter />
    </Provider>
);
