const add = (increment) => ({
    type: 'ADD',
    increment
});

const reset = () => ({
    type: 'SET',
    value: 0
});

module.exports = {
    add,
    reset
};
