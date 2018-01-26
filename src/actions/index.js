const SELECT_FILTER = 'SELECT_FILTER';
const SELECT_FILTER_VALUE = 'SELECT_FILTER_VALUE';

const selectFilter = filterID => ({
  type: SELECT_FILTER,
  filterID
});

export { SELECT_FILTER, SELECT_FILTER_VALUE, selectFilter };
