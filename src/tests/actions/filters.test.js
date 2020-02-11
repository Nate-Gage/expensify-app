import { setTextFilter, sortByAmount, setStartDate, setEndDate, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should sort by amount on action object', () => {
    const action = sortByAmount(500);
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test('should sort by date on action object,', () => {
    const action = sortByDate(moment(0));
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should sort by text on action object', () => {
    const action = setTextFilter('some text');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'some text'
    });
});

test('should sort by default text on action object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
