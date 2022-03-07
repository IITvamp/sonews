import axios from 'axios';
import { SERVER_URL } from './config';

// axios.defaults.withCredentials = true;
export const getDataAPI = async (url,token) => {
    const res = await axios.get(`${SERVER_URL}/api/${url}`,{
        headers: { Authorization: token}
    });
    return res;
}

export const postDataAPI = async (url, post, token) => {
  console.log("post 1", post, token)
  const res = await axios.post(
    `${SERVER_URL}/api/${url}`,
    post,
    {
      headers: { Authorization: token },
    }
  );
  console.log("post api called" ,res);
  return res;
};

export const postDataAPIforRefreshToken = async (url, post, token) => {
  console.log("post 2", post, token);
  const res = await axios.post(`/api/${url}`, post, {
    headers: { Authorization: token },
  }, {withCredentials:true });
  console.log("post api called", res);
  return res;
};


export const putDataAPI = async (url, post, token) => {
  const res = await axios.put(`${SERVER_URL}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const patchDataAPI = async (url, post, token) => {
  const res = await axios.patch(`${SERVER_URL}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};


export const deleteDataAPI = async (url, token) => {
  const res = await axios.delete(`${SERVER_URL}/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};