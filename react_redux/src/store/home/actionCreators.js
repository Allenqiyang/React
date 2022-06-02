import {change_b, change_r, fetch} from './constants'
import axios from 'axios'

// 轮播图和推荐的action
export const changeBannersAction = (banners) => ({
  type: change_b,
  banners
})

export const changeRecommendAction = (recommends) => ({
  type: change_r,
  recommends
})

// redux-thunk定义的action函数
export const getHomeMultidataAction = dispatch => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then(res => {
    const data = res.data.data
    dispatch(changeBannersAction(data.banner.list))
    dispatch(changeRecommendAction(data.recommend.list))
  })
}

export const fetchHomeMultidataAction = {
  type: fetch
}