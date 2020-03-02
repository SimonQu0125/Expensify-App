import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(() => {
  setTextFilterSpy = jest.fn();
  sortByDateSpy = jest.fn();
  sortByAmountSpy = jest.fn();
  setStartDateSpy = jest.fn();
  setEndDateSpy = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters = {filters}
      setTextFilter = {setTextFilterSpy}
      sortByDate = {sortByDateSpy}
      sortByAmount = {sortByAmountSpy}
      setStartDate = {setStartDateSpy}
      setEndDate = {setEndDateSpy}
    /> 
  );
});

test('Should render expense list filter correctly',() =>{
  expect(wrapper).toMatchSnapshot();
});

test('Should render expense list with alt filter correctly',() =>{
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'abcdefg'
  const e = {
    target: { value }
  };
  wrapper.find('input').simulate('change', e);
  expect(setTextFilterSpy).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
  const e = {
    target: {
      value: 'date'
    }
  };
  wrapper.find('select').simulate('change', e);
  expect(sortByDateSpy).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const e = {
    target: {
      value: 'amount'
    }
  };
  wrapper.find('select').simulate('change', e);
  expect(sortByAmountSpy).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDateSample = moment(0).add(10,'days');
  const endDateSample = moment(0).add(1,'months');
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate:startDateSample, endDate:endDateSample});
  expect(setStartDateSpy).toHaveBeenLastCalledWith(startDateSample);
  expect(setEndDateSpy).toHaveBeenLastCalledWith(endDateSample);
});

test('should handle date focus change', () => {
  const calendarFocusedSample = 'startDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocusedSample);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocusedSample);
});