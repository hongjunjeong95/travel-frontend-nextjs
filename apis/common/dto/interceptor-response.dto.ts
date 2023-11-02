export abstract class SuccessInterceptorResponse<Data> {
  success: boolean;
  message: string;
  data: Data;
}
