import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:4000",
});

API.interceptors.request.use((config) => {
    config.headers["x-api-key"] = "79573220ae5991af35bdcc552b1dd1c5";
    return config;
});

export const getTotals = () => API.get("/insights/totals");

export const getOrdersByDate = (startDate, endDate) =>
    API.get("/insights/orders-by-date", { params: { startDate, endDate } });

export const getTopCustomers = () => API.get("/insights/top-customers");

export const ingestCustomers = () => API.post("/ingest/customers");
export const ingestProducts = () => API.post("/ingest/products");
export const ingestOrders = () => API.post("/ingest/orders");
