import { call, put, takeEvery } from 'redux-saga/effects';

export function* fetchFilters(action) {
  const response = yield call(fetch, 'http://localhost:3004/filters');
  const filters = yield response.json();
  yield put({ type: 'FETCH_FILTERS_SUCCESS', payload: { filters } });
}

function* watchFetchData() {
  yield takeEvery('FETCH_FILTERS_REQUESTED', fetchFilters);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield watchFetchData();
}
