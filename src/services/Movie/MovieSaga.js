import { put, takeLatest, all } from 'redux-saga/effects';

import { Types as movieActions } from "./MovieActions";
import Api from '../../common/Api/Api';

function* getAll(data) {
  const response = yield Api.get('/user/permissions')
    .catch(error => error);
  console.log(response);

  if (response.ok) {
    yield put({ type: movieActions.GET_ALL_SUCCESS })
  } else { }
  //yield put({ type: movieActions.GET_PERMISSIONS_FAILED, error: response })
}

function* ActionWatcher() {
  yield takeLatest(movieActions.GET_ALL, getAll)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}