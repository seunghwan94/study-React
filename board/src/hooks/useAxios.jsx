import axios from 'axios';
import { useCallback, useState } from 'react';
import { useAuth } from './AuthContext';

const BASE_URL = 'http://localhost:9999/api/v1/';

const useAxios = (baseUrl = BASE_URL) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const req = useCallback(
    async (method, endPoint, body = null, addHeaders = {}) => {
      setLoading(true);
      setError(null);
      try{
        const resp = await axios({
          url: `${baseUrl}${endPoint}`,
          data: body,
          method,
          headers: {'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${token}`,
                    ...addHeaders}
        });
        setData(resp.data);
        return resp.data;
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    }
  , [baseUrl, token]);

  return {data, loading, error, req};
}

export default useAxios;
