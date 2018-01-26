import { SELECT_FILTER, SELECT_FILTER_VALUE } from '../actions';

export default function(
  state = {
    selectedFilter: null,
    selectedFilterValue: {}
  },
  action
) {
  switch (action.type) {
    case SELECT_FILTER:
      return { ...state, selectedFilter: action.filterID };
    case SELECT_FILTER_VALUE:
      return { ...state, selectedFilterValue: action.filterValue };
    default:
      return state;
  }
}
