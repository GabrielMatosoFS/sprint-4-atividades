import axios from "axios";

export const api = axios.create({
   baseURL: "https://contact-fake-api.onrender.com",
   timeout: 8 * 1000,
});
