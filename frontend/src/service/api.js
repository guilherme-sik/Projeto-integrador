import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/mauriciogregory/api/", //aqui será a URL da nossa API
});

export default api;
