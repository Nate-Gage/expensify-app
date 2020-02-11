import { createStore, combineReducers } from 'redux';
import { addExpense } from '../actions/expenses';
import { setTextFilter } from '../actions/filters';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import getVisibleExpenses from '../selectors/expenses';

// ---STORE CREATION---
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};