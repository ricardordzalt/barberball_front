import axios from 'axios';
import PATH from '../../Configs/Services/Config';

import AsyncStorage from '@react-native-community/async-storage';

const axiosFetch = (method, url) => {
    const defaultOptions = {
      baseURL: `${PATH}/${url}`,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Create instance
    let instance = axios.create(defaultOptions);
  
    // Set the AUTH token for any request
instance.interceptors.request.use(async function (config) {
        const token = await AsyncStorage.getItem('TOKEN');
      config.headers.Authorization =  token ? `Bearer ${token}` : '';
      return config;
    });
  
    return instance;
  };
  
  export default axiosFetch();