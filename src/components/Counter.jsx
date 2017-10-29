import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actionCreators from '../actions/counter';

const Counter = ({ counter, add, reset }) => {
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => add(1)}>+</button>
            <button onClick={() => add(-1)}>-</button>
            <button onClick={reset}>Clear</button>
        </div>
    );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
    add: (inc) => dispatch(actionCreators.add(inc)),
    reset: () => dispatch(actionCreators.reset())
});

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
