import filtersReducer from '../../reducers/filters';

//the first argument to filtersReducer is undefined because it is testing defaults
test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    });
});

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    });
});

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'robots';
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    };
    const action = { type: 'SET_TEXT_FILTER', text: text };
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe(text);
});