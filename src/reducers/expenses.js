//Expenses Reducer
const expensesReducerDefaultState = [];

//All reducers take 2 arguments, a state and an action.
//The state argument is a reference to the part of the state that the reducer manages,
//in this case, the expensesReducerDefaultState array. 
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

export default expensesReducer;