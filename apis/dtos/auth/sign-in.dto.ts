import { SuccessInterceptorResponse } from "../common/interceptor-response.dto";

export type SignInBodyDto = {
  email: string;
  password: string;
};

export class SignInResponseDto extends SuccessInterceptorResponse<SignInResponseDto> {}
