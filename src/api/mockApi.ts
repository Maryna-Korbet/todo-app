import axios from "axios";
import configuration from "../configuration/configuration";

const mockapiKey = configuration.apiMockapiKey;

const BASE_API_URL = `https://${mockapiKey}.mockapi.io/api/v1`;

export const fetchTasks = () => axios.get(`${BASE_API_URL}/tasks`);

export const createTask = (task: { text: string; completed: boolean }) => axios.post(`${BASE_API_URL}/tasks`, task);

export const updateTask = (id: string, task: { text: string; completed: boolean }) => axios.put(`${BASE_API_URL}/tasks/${id}`, task);

export const deleteTask = (id: string) => axios.delete(`${BASE_API_URL}/tasks/${id}`);
