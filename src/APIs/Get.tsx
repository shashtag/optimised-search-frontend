import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API;

export const get = async (url: string) => {
  try {
    return await axios.get(url).then((res) => {
      return { result: res.data, status: res.status };
    });
  } catch (error: any) {
    return { result: error.response.data, status: error.response.status };
  }
};
