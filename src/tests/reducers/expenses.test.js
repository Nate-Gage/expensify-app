import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
    const action = { 
        type: 'REMOVE_EXPENSE', 
        id: expenses[1].id 
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if ID not found', () => {
    const action = { 
        type: 'REMOVE_EXPENSE', 
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '123abc',
        description: 'Haircut',
        note: '',
        createdAt: 0,
        amount: 3000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense if found', () => {
    const amount = 15000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount: amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(amount);
});

test('should not edit an expense if not found', () => {
    const amount = 15000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '205a1c',
        updates: {
            amount: amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});