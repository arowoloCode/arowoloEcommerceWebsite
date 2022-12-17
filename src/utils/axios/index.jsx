import axios from "axios";
import { getAccessToken, getNewAccessToken } from "..";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    config.headers["authorization"] = `Bearer ${getAccessToken()}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    console.log(err);
    if (
      err.response.data.message === "jwt expired" &&
      err.response.status === 401
    ) {
      try {
        const newAccessToken = await getNewAccessToken();
        instance.defaults.headers.common[
          "authorization"
        ] = `Bearer ${newAccessToken}`;

        return instance(originalConfig);
      } catch (error) {
        return Promise.reject(error);
    }
    }

    return Promise.reject(err);
  }
);

export default instance;
