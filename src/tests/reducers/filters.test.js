import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
})

test('should set text filter to text', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'hi guy' })
  expect(state.text).toBe('hi guy')
})

test('should set start date filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment().startOf('month')})
  expect(state.startDate).toEqual(moment().startOf('month'))
})

test('should set end date filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment().endOf('month')})
  expect(state.endDate).toEqual(moment().endOf('month'))
})
