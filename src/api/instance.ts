import axios, {type AxiosError, type AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    }
})

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    (error: AxiosError) => {
        const { response } = error;
        if (!response) {
            return Promise.reject(error);
        }
        // TODO: 后端响应业务异常处理
    }
)

export default instance;