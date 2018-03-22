import { call, put, takeEvery, all } from "redux-saga/effects";

import {
  RESET_PARTICIPANT_ATTRIBUTE_TYPE,
  REQUEST_POSSIBLE_PARTICIPANT_ATTRIBUTES,
  SUCCESS_POSSIBLE_PARTICIPANT_ATTRIBUTES,
  SELECT_PARTICIPANT_ATTRIBUTE_TYPE
} from "../actions";

function* watchForChangeInParticipantAttributeType() {
  yield takeEvery(SELECT_PARTICIPANT_ATTRIBUTE_TYPE, function*() {
    yield put({
      type: RESET_PARTICIPANT_ATTRIBUTE_TYPE
    });
  });
}

function* watchFetchPossibleParticipantAttributes() {
  yield takeEvery(
    REQUEST_POSSIBLE_PARTICIPANT_ATTRIBUTES,
    fetchPossibleParticipantAttributes
  );
}

export function* fetchPossibleParticipantAttributes(action) {
  const response = yield call(fetch, "http://localhost:3004/filters");
  const filters = yield response.json();
  yield put({
    type: SUCCESS_POSSIBLE_PARTICIPANT_ATTRIBUTES,
    payload: { filters }
  });
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchPossibleParticipantAttributes(),
    watchForChangeInParticipantAttributeType()
  ]);
}
