const addToCounter = (state, action) => {
    return Object.assign({}, state, { counter: state.counter + action.increment })
};

const setCounter = (state, action) => {
    return Object.assign({}, state, { counter: action.value })
};

module.exports = (state = {}, action = {}) => {
    switch (action.type) {
        case 'ADD': return addToCounter(state, action);
        case 'SET': return setCounter(state, action);
        default: return state;
    }
};
