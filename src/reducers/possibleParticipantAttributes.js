import {
  REQUEST_POSSIBLE_PARTICIPANT_ATTRIBUTES,
  SUCCESS_POSSIBLE_PARTICIPANT_ATTRIBUTES,
  ERROR_POSSIBLE_PARTICIPANT_ATTRIBUTES
} from "../actions";

export default function(state = { items: [], loading: false }, action) {
  switch (action.type) {
    case REQUEST_POSSIBLE_PARTICIPANT_ATTRIBUTES:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_POSSIBLE_PARTICIPANT_ATTRIBUTES:
      return {
        items: action.payload.filters,
        loading: false
      };
    case ERROR_POSSIBLE_PARTICIPANT_ATTRIBUTES:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
