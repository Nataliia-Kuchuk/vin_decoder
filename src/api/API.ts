import axios from "axios";
import { variables } from "../types/variables";

export const BASE_URL = variables.url;

const API = axios.create({
  baseURL: BASE_URL,
});

export default API
