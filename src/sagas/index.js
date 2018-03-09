import { call, put, takeEvery } from 'redux-saga/effects';


function* watchFetchData() {
  yield takeEvery('FETCH_FILTERS_REQUESTED', fetchFilters);
}

export function* fetchFilters(action) {
  const response = yield call(fetch, 'http://localhost:3004/filters');
  const filters = yield response.json();
  yield put({ type: 'FETCH_FILTERS_SUCCESS', payload: { filters } });
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield watchFetchData();
}
