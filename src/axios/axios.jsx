import axios from "axios";
import queryString from "query-string";

const instance = axios.create({
  baseURL: process.env.URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

instance.interceptors.request.use(async (config) => {
  return config;
});

instance.interceptors.response.use(
  (res) => {
    if (res && res.data) return res;
    return res;
  },
  (err) => {
    throw err;
  }
);

export default instance;
