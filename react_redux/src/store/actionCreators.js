import {add, sub, inc, dec, change_b, change_r} from './constant.js'
import axios from 'axios'
// function addAction(num) {
//   return {
//     type: "add",
//     num
//   }
// }

// export default addAction = (num) => {
//   return {
//     type: "add",
//     num
//   }
// }

export const addAction = num => ({
  type: add,
  num
})

export const subAction = num => ({
  type: sub,
  num
})

export const incAction = () => ({
  type: inc,
})

export const decAction = () => ({
  type: dec,
})

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