import { SuccessInterceptorResponse } from "apis/common/dto/interceptor-response.dto";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export class ClientHttpClient {
  constructor(private readonly baseURL: string) {}

  async PlainAPI<Res, Data>(
    url: string,
    options?: AxiosRequestConfig<Data>
  ): Promise<SuccessInterceptorResponse<Res>> {
    try {
      const res = await axios.request<
        SuccessInterceptorResponse<Res>,
        AxiosResponse<SuccessInterceptorResponse<Res>>,
        Data
      >({
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
        res?.data && res.data?.message
          ? res.data.message
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

  async API<Res, Data>(
    url: string,
    options?: AxiosRequestConfig<Data>
  ): Promise<SuccessInterceptorResponse<Res>> {
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
      const res = await api.request<
        SuccessInterceptorResponse<Res>,
        AxiosResponse<SuccessInterceptorResponse<Res>>,
        Data
      >({
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
        res?.data && res?.data?.error?.message
          ? res.data.error.message
          : "Something went wrong! 🤪";

      throw new Error(message);
    }
  }
}
