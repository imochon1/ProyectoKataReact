import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { URL_BACKEND } from "../utils/url_base";

export const loginService = (body) => {
  axios
    .post(`${URL_BACKEND}`, body)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log("Error", error);
    });
};
