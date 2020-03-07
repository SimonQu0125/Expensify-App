import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpensesSummary';

test('should correctly render page with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expensesCount = {1} expensesTotal = {200} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render page with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expensesCount = {4} expensesTotal = {200212.12} />);
  expect(wrapper).toMatchSnapshot();
});