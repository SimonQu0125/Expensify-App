import React from 'react';
import { connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render(){
    return (
      <div>
        <ExpenseForm 
          //pass expense through props
          expense = {this.props.expense}
          //get the expense back by using child to call parent prop function
          onSubmit = {this.onSubmit}
        />
        <button onClick= {this.onRemove}>Remove</button>
      </div>
    );
  }

}

// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm 
//         //pass expense through props
//         expense = {props.expense}
//         //get the expense back by using child to call parent prop function
//         onSubmit = {(expense) => {
//           props.dispatch(editExpense(props.expense.id, expense));
//           props.history.push('/');
//         }}
//       />
//       <button onClick={() => {
//         props.dispatch(removeExpense({ id: props.expense.id }));
//         props.history.push('/');
//       }}>Remove</button>
//     </div>
//   );
// };

const mapStateToProps = (state,props) => {
  return {
    expense: state.expenses.find((e) => e.id === props.match.params.id )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id,expense)),
    removeExpense: (id) => dispatch(removeExpense(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
