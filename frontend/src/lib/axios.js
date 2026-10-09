import axios from "axios";

// Production,  there's no localhost... so we make it dynamic
const base_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"

const api = axios.create({
    baseURL: base_URL,
});

export default api;