import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { URL_BACKEND } from "../utils/url_base";

export const loginService = (body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${URL_BACKEND}/login`, body)
      .then((response) => {
        const { data, status } = response;
        console.log("data", data);
        console.log("status", status);
        resolve(data);
      })
      .catch(({ response }) => {
        //console.log(" CATCH Error", error);
        reject(response);
      });
  });
};

export const itemService = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${URL_BACKEND}/item`)
      .then((response) => {
        const { data, status } = response;
        console.log("Status", status);
        resolve(data);
      })
      .catch(({ response }) => {
        reject(response);
      });
  });
};
