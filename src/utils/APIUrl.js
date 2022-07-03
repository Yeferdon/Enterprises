import axios from "axios";

const APIUrl = axios.create({
  baseURL: "http://localhost:3001/enterprises",
});
export default APIUrl;
