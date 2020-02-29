import { all } from 'redux-saga/effects';

import searchSaga from 'store/search/saga';
import latestMovieSaga from 'store/movie/latest/saga';
import popularMoviesSaga from 'store/movie/popular/saga';
import genresSaga from 'store/genres/saga';

export default function* rootSaga() {
  yield all([searchSaga(), latestMovieSaga(), popularMoviesSaga(), genresSaga()]);
}
