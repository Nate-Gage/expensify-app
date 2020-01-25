import { createStore } from 'redux';

//INCREMENT COUNT
const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    };
};

//DECREMENT COUNT
const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    };
};

//RESET COUNT
const resetCount = () => {
    return {
        type: 'RESET',
    }
}

//SET COUNT
const setCount = ({ count }) => {
    return {
        type: 'SET',
        count: count
    }
}

//REDUCERS
//1. Reducers are pure functions
//2. Reducers never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: state.count = 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
}

//createStore takes in 2 arguments, the current state the store and the action to apply
const store = createStore(countReducer);

//this function is called everytime the store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 300 }));


