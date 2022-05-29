import axios from 'axios'
import {takeEvery, put, all} from 'redux-saga/effects'
import { changeBannersAction, changeRecommendAction } from './actionCreators'
import { fetch } from './constant'

function* fetchHomeMultidata(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata")
  const banners = res.data.data.banner.list
  const recommends = res.data.data.recommend.list
  yield all([
    yield put(changeBannersAction(banners)),
    yield put(changeRecommendAction(recommends))
  ])
}

function* mySaga() {
  // takeEvery 每一个都会被执行
  // takeLatest 依次只能监听一个对应的action
  yield takeEvery(fetch, fetchHomeMultidata)
}

export default mySaga