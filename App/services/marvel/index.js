import axios from 'axios';
const md5 = require('js-md5');
import {PUBLIC_KEY, PRIVATE_KEY, API_URL} from './constants';

export default Api = async (route) => {
  try {
    const timestamp = new Date().getTime();
    const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
    const url = API_URL + route;
    const params = {
      hash,
      ts: timestamp,
      apikey: PUBLIC_KEY,
    };

    const response = await axios.get(url, {params});
    if (response.status != 200) {
      return {result: '', success: false};
    }
    return {result: response.data, success: true};
  } catch (err) {
    console.log(`Error on get ${route} : ${err}`);
    return {result: '', success: false};
  }
};
