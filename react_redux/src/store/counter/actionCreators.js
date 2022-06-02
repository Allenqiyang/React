import {add, sub, inc, dec} from './constants'
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
