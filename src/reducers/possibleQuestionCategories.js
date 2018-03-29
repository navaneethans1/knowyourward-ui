import {
  REQUEST_QUESTION_CATEGORIES,
  SUCCESS_QUESTION_CATEGORIES,
  ERROR_QUESTION_CATEGORIES
} from "../actions/possibleQuestionCategories";

export default function(state = { items: [], loading: false }, action) {
  switch (action.type) {
    case REQUEST_QUESTION_CATEGORIES:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_QUESTION_CATEGORIES:
      return {
        items: action.payload.filters,
        loading: false
      };
    case ERROR_QUESTION_CATEGORIES:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
