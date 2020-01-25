import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ---ACTION GENERATORS---
// Add expense generator
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
    }
});

// Remove expense generator
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

// Edit expense generator
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
});

// Edit filter generator
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text: text
});

// Sort by amount generator
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// Sort by amount generator
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// Sort by start date generator
const setStartDate = (startDate) => ({
    type: 'START_DATE',
    startDate: startDate
});

// Sort by end date generator 
const setEndDate = (endDate) => ({
    type: 'END_DATE',
    endDate: endDate
});

// ---REDUCERS---
//Reducers take in two arguments, the state and action to apply

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

//Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}; 

// ---STORE CREATION---
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

// ---STORE DISPATCHES---
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: -11000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: 500 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('Coffee'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(999));

const demo = {
    expenses: [{
        id: 'sofhaweflh',
        description: 'Car payment',
        note: 'This was the final payment for the car',
        amount: 25000,
        createAt: 0
    }],
    filters: {
        text: 'car loan',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}
