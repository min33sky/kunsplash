import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { unsplashAction, unsplashSelector } from './slice';
import { getSplashImage } from './../../api/index';

export function* handleImageLoad() {
  const { loadSuccess, loadFail } = unsplashAction;

  try {
    const page = yield select(unsplashSelector.page);
    // const prevImages = yield select(unsplashSelector.images);
    const nextPage = page + 1;
    const newImages = yield call(getSplashImage, nextPage);

    yield put(
      loadSuccess({
        images: newImages,
        nextPage,
      }),
    );
  } catch (error) {
    yield put(loadFail(error));
  }
}

function* watchUnsplash() {
  const { load, loadMore } = unsplashAction;

  yield takeLatest(load, handleImageLoad);
  yield takeLatest(loadMore, handleImageLoad);
}

export default function* unsplashSaga() {
  yield all([fork(watchUnsplash)]);
}
