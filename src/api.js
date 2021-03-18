import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_ENDPOINT || "http://localhost:8000";

export default class Api {
  static getIndicators() {
    return axios.get(BASE_URL + "/indicators");
  }

  static getIndicator(id) {
    return axios.get(BASE_URL + `/indicators/${id}`);
  }
}
