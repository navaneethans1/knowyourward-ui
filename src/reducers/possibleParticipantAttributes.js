export default function(state = { items: [], loading: false }, action) {
  switch (action.type) {
    case "FETCH_FILTERS_REQUESTED":
      return {
        ...state,
        loading: true
      };
    case "FETCH_FILTERS_SUCCESS":
      return {
        items: action.payload.filters,
        loading: false
      };
    default:
      return state;
  }
}
