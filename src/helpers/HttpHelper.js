import axios from 'axios';
const addCommonHeader = (authorization) => {
  axios.defaults.headers['Content-Type'] = 'application/json';
};

class HttpHelpers {
  static post = async (url, params, authorization = false) =>{
    params._t = new Date().getTime();
    addCommonHeader(authorization)
    return await axios.post(url, params)
  };
}

export default HttpHelpers

