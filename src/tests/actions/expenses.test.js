import { addExpense, editExpense,removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);


test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
})

test('should setup edit expense action object', () => {
  const action = editExpense('456abc', {note: 'some notes'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id:'456abc',
    updates: {note: 'some notes'}
  });
})

test('should setup add expense action object with provided values',() => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
})

test('should add expense to database and store', () => {
  const store = createMockStore({});
  const expenseData = {
    description: 'mouse',
    amount: 3000,
    note: 'This is a better one',
    createdAt: 1000
  };

  console.log(store.dispatch(startAddExpense(expenseData)) instanceof Promise);
});




// test('should setup add expense action object with default values',() => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       amount: 0,
//       createdAt: 0,
//       note: ''
//     }
//   });
// })