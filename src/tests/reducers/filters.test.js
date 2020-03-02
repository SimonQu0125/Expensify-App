import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',()=>{
 const state = filtersReducer(undefined,{type: '@@INIT'});
 expect(state).toEqual(
  {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
 );
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'somthing else',
    startDate: undefined,
    endDate: undefined
  };
  const action = {type: 'SORT_BY_DATE'};
  const state = filtersReducer(currentState,action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const textToUse = 'Something to set';
  const action = {
    type: 'SET_TEXT_FILTER',
    text: textToUse
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(textToUse);
});

test('should set startDate filter', () => {
  const momentToUse = moment(0).add(2,'day');
  const action = {
    type: 'SET_START_DATE',
    startDate: momentToUse
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(momentToUse);
});

test('should set endDate filter', () => {
  const momentToUse = moment(0).subtract(2,'day');
  const action = {
    type: 'SET_END_DATE',
    endDate: momentToUse
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(momentToUse);
});
