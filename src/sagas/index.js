import { call, put, takeEvery, all } from "redux-saga/effects";

import {
  RESET_PARTICIPANT_ATTRIBUTE_TYPE,
  REQUEST_POSSIBLE_PARTICIPANT_ATTRIBUTES,
  SUCCESS_POSSIBLE_PARTICIPANT_ATTRIBUTES,
  SELECT_PARTICIPANT_ATTRIBUTE_TYPE
} from "../actions";

import {
  REQUEST_QUESTION_CATEGORIES,
  SUCCESS_QUESTION_CATEGORIES,
  ERROR_QUESTION_CATEGORIES
} from "../actions/possibleQuestionCategories";

import {
  REQUEST_SURVEY_AGGREGATE_RESULTS,
  SUCCESS_SURVEY_AGGREGATE_RESULTS
} from "../actions/questions";

function* watchFetchPossibleParticipantAttributes() {
  yield takeEvery(
    REQUEST_POSSIBLE_PARTICIPANT_ATTRIBUTES,
    fetchPossibleParticipantAttributes
  );
}

function* watchFetchPossibleQuestionCategories() {
  yield takeEvery(REQUEST_QUESTION_CATEGORIES, fetchPossibleQuestionCategories);
}

function* watchFetchSurveyQuestions() {
  yield takeEvery(REQUEST_SURVEY_AGGREGATE_RESULTS, fetchSurveyQuestions);
}

function* watchForChangeInParticipantAttributeType() {
  yield takeEvery(SELECT_PARTICIPANT_ATTRIBUTE_TYPE, function*() {
    yield put({
      type: RESET_PARTICIPANT_ATTRIBUTE_TYPE
    });
  });
}

export function* fetchPossibleParticipantAttributes(action) {
  const response = yield call(fetch, "http://localhost:3004/filters");
  const filters = yield response.json();
  yield put({
    type: SUCCESS_POSSIBLE_PARTICIPANT_ATTRIBUTES,
    payload: { filters }
  });
}

export function* fetchPossibleQuestionCategories(action) {
  const response = yield call(fetch, "http://localhost:3004/categories");
  const filters = yield response.json();

  try {
    yield put({
      type: SUCCESS_QUESTION_CATEGORIES,
      payload: { filters }
    });
  } catch (e) {
    yield put({
      type: ERROR_QUESTION_CATEGORIES,
      payload: { error: e }
    });
  }
}

export function* fetchSurveyQuestions() {
  const response = yield call(fetch, "http://localhost:3004/questions");
  const surveyQuestionAggregateResults = yield response.json();

  yield put({
    type: SUCCESS_SURVEY_AGGREGATE_RESULTS,
    payload: { surveyQuestionAggregateResults }
  });
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchSurveyQuestions(),
    watchFetchPossibleParticipantAttributes(),
    watchFetchPossibleQuestionCategories(),
    watchForChangeInParticipantAttributeType()
  ]);
}
