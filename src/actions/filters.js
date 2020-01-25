// Edit filter generator
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text: text
});

// Sort by amount generator
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// Sort by amount generator
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// Sort by start date generator
export const setStartDate = (startDate) => ({
    type: 'START_DATE',
    startDate: startDate
});

// Sort by end date generator 
export const setEndDate = (endDate) => ({
    type: 'END_DATE',
    endDate: endDate
});