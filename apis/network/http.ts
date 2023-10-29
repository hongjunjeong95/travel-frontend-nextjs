import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export class HttpClient {
  constructor(private readonly baseURL: string) {}

  async PlainAPI<Res, Data>(
    url: string,
    options?: AxiosRequestConfig<Data>
  ): Promise<Res> {
    try {
      const res = await axios.request<Res, AxiosResponse<Res>, Data>({
        url: `${this.baseURL}${url}`,
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
        withCredentials: true,
      });

      return res.data;
    } catch (error: any) {
      const res = error.response;
      const message =
        res.data && res.data.error.message
          ? res.data.error.message
          : "Something went wrong!";
      throw new Error(message);
    }
  }

  private readonly headerTokenConfig = (config: InternalAxiosRequestConfig) => {
    const method = config.method?.toUpperCase();
    if (method !== "OPTIONS") {
      // config['X-CSRF-TOKEN'] = csrf
    }
    return config;
  };

  isRefreshing = false;
  failedQueue = [];

  async API<Res, Data>(
    url: string,
    options?: AxiosRequestConfig<Data>
  ): Promise<Res> {
    const api = axios.create({
      baseURL: this.baseURL,
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      withCredentials: true,
    });

    api.interceptors.request.use(this.headerTokenConfig);

    try {
      const res = await api.request<Res, AxiosResponse<Res>, Data>({
        url,
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
      });

      return res.data;
    } catch (error: any) {
      const res = error.response;
      const message =
        res.data && res.data.error.message
          ? res.data.error.message
          : "Something went wrong! 🤪";
      throw new Error(message);
    }
  }
}
