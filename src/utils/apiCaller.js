import axios from "axios";
import * as Config from "./../constants/Config";

export default function callApi(entpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${entpoint}`,
    data: body
  }).catch(err => {
    console.log(err);
  });
}
