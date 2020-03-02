import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should setup default expenses values',()=>{
  const state = expensesReducer(undefined,{type: '@@INIT'});
  expect(state).toEqual([]);
})

test('should remove expense by id',()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense if id not found',()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses);
})


test('should add an expense',()=>{
  const expense = {
    id: '4',
    description: 'Loan',
    note:'something',
    amount: 300000,
    createdAt: moment(0).subtract(2, 'months').valueOf()
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense : expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense]);
})

test('should edit expense by id',()=>{
  const updates = {
    description: 'Some Description',
    note:'Some Notes',
    amount: 100000,
    createdAt: moment(0).subtract(1, 'years').valueOf()
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id : expenses[0].id,
    updates
  }
  const state = expensesReducer(expenses, action)
  expect(state[0]).toEqual({
    id: expenses[0].id,
    ...updates
  });
})

test('should not edit expense if id not found',()=>{
  const updates = {
    description: 'Some Description',
    note:'Some Notes',
    amount: 100000,
    createdAt: moment(0).subtract(1, 'years').valueOf()
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id : '-1',
    updates
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses);
})