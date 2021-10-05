import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { URL_BACKEND } from "../utils/url_base";

export const loginService = (body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${URL_BACKEND}`, body)
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
