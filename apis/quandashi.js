import axios from 'axios'
var host = 'http://121.199.78.82:5000'
const axiosAjax = (url, params, option) => {
  return axios({
      method: option && option.method || 'post',
      url: host + url,
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

export {
  axiosAjax,
}