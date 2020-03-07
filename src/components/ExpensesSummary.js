import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/selectExpensesTotal';
import numeral from 'numeral'; 

export const ExpenseSummary = ({expensesCount, expensesTotal }) => (
  <div>
    <h1> 
      Viewing {expensesCount} {expensesCount === 1 ? 'expense':'expenses'} totalling {expensesTotal}. 
    </h1>
    
  </div>
);

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: numeral(selectExpensesTotal(visibleExpenses) / 100).format('$0,0.00')
  };
};

export default connect(mapStateToProps)(ExpenseSummary);