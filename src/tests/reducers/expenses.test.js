import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
})

test('should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by ID if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const expense = {
    text: 'food',
    amount: 1000,
    note: '',
    createdAt: moment()
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
  const description = {
    description: 'Gum and Food'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      description
    }
  }

  const state = expensesReducer(expenses, action)
  expect(state[0].description).toBe(description)
})

test('should not edit an expense if id not found', () => {
  const description = {
    description: 'Gum and Food'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      description
    }
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
