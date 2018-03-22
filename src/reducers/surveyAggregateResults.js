import {
  REQUEST_SURVEY_AGGREGATE_RESULTS,
  SUCCESS_SURVEY_AGGREGATE_RESULTS,
  ERROR_SURVEY_AGGREGATE_RESULTS
} from "../actions/questions";

export default function(state = { results: [], loading: false }, action) {
  switch (action.type) {
    case REQUEST_SURVEY_AGGREGATE_RESULTS:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_SURVEY_AGGREGATE_RESULTS:
      return {
        results: action.payload.surveyQuestionAggregateResults,
        loading: false
      };
    case ERROR_SURVEY_AGGREGATE_RESULTS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
