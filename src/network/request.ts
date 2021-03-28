import axios from 'axios';

export default function request(config:Object){
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    
    // console.log(err);
  })

  instance.interceptors.response.use(res => {
      if ( res.data.returnCode == 'SUCCESS') {
        return res.data.data;
      }else{
        return [];
      }
  }, err => {
    console.log(err);
  })

  return instance(config)
}