import axios, { AxiosError } from 'axios'

const API_URL = 'https://conduit.productionready.io/api'

export interface ApiResponse<T> {
  data: T;
  err: number;
  msg: string;
  url: string;
}

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

api.interceptors.response.use((response) => {
  return response
}, (error: AxiosError) => {
  console.error(error)
})

export default api
