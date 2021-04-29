import axios from 'axios';
import qs from 'qs';
import Cookies from 'js-cookie';
import config from './config';

class Service {
  constructor () {
  }
  static getUrl(api) {
    if (process.env.NODE_ENV === 'development') {
      Object.keys(config).forEach((key) => {
        Cookies.set(key, config[key]);
      });
      return api;
    } else if (process.env.NODE_ENV === 'production') {
      return process.env.VUE_APP_HOST + api;
    }
    return api;
  }

  static get (api, params = {}, requestConfig = {}) {
    if (!api) return;
    try {
      return new Promise((resolve, reject) => {
        const url = this.getUrl(api);
        const config = {
          header: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
        axios({
          url,
          method: 'get',
          params: { ...params},
          ...{ ...config, ...requestConfig}
        }).then(res => {
          resolve(res.data);
        }).catch(err => {
          reject(err);
        });
      })
    } catch (err) {
      console.log(`Service.get${api} Method err-------->${err}`);
    }
  }

  static post(api, params = {}, requestConfig = {}) {
    if (!api) return;
    try {
      return new Promise((resolve, reject) => {
        const url = this.getUrl(api);
        const config = {
          header: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
        axios({
          url,
          method: 'post',
          data: qs.stringify({ ...params }),
          ...{ ...config, ...requestConfig }
        }).then(res => {
          resolve(res.data);
        }).catch(err => {
          reject(err);
        })
      })
    } catch (err) {
      console.log(`Service.get${api} Method err-------->${err}`);
    }
  }

  static upload(api, params = {}, requestConfig = {}) {
    if (!api) return;
    try {
      return new Promise((resolve, reject) => {
        const url = this.getUrl(api);
        const config = {
          header: {
            'Content-Type': 'multipart/form-data'
          }
        }
        axios({
          url,
          method: 'post',
          data: qs.stringify({ ...params }),
          ...{ ...config, ...requestConfig }
        }).then(res => {
          resolve(res.data);
        }).catch(err => {
          reject(err);
        })
      })
    } catch (err) {
      console.log(`Service.get${api} Method err-------->${err}`);
    }
  }
}

export default Service;