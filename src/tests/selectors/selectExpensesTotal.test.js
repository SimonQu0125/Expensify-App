import selectExpensesTotal from '../../selectors/selectExpensesTotal';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
  const result = selectExpensesTotal();
  expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(expenses[0].amount);
});

test('should correctly add up multiple expense', () => {
  let total = 0;
  expenses.forEach((e) => {
    total += e.amount;
  });
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(total);
});