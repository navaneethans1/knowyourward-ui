const SELECT_FILTER = "SELECT_FILTER";
const SELECT_FILTER_OPTION = "SELECT_FILTER_OPTION";

const selectFilter = filterID => ({
  type: SELECT_FILTER,
  filterID
});

const selectFilterOption = filterOptionID => ({
  type: SELECT_FILTER_OPTION,
  filterOptionID
});

export {
  SELECT_FILTER,
  SELECT_FILTER_OPTION,
  selectFilter,
  selectFilterOption
};
