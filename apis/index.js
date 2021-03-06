// import {
//   host
// } from "./../config";
import axios from 'axios'
// import fetch from 'isomorphic-unfetch'
// var host = 'http://localhost:4001'
// var host = 'http://47.98.146.104:4001'
// var host = 'https://nodeuat.sgsonline.com.cn'
// var host = 'https://nodedev.sgsonline.com.cn'
const host = process.env.NODE_ENV !== 'development' ? 'http://api.fuzhongkuo.com' : 'http://127.0.0.1:4001'
console.log('host', host)

const axiosAjax = (url, params, option) => {
  // console.log('host', host + url)
  // console.log('url', url)
  // console.log('params', params)
  // console.log('option', JSON.stringify(option))
  return axios({
      method: option && option.method || 'post',
      url: host + url,
      // url,
      data: params,
      headers: option && option.headers || {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if (res.status === 200) {
        console.log(res.data)
        return res.data
      }
    })
    .catch(err => {
      console.log('系统错误', err)
      return err;
    })
}

// const fetchAjax = (url, params, option) => {
//   const defaultOption = {

//   }
//   return fetch(url, {
//       method: option && option.method || "POST",
//       // body: JSON.stringify(params),
//       headers: option && option.headers || {
//         "Content-Type": "application/json"
//       },
//       credentials: "same-origin" || option && option.credentials
//     }).then(response => response.json())
//     .then(data => {
//       return data
//     })
//     .catch(err => {
//       console.log('系统错误', err)
//       return err;
//     })
// }

export {
  axiosAjax,
  // fetchAjax
}