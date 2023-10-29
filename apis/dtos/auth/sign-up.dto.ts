import { UserRole } from "@/apis/entities/users/user.entity";
import { SuccessInterceptorResponse } from "../common/interceptor-response.dto";

export type SignUpBodyDto = {
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
};

export class SignUpResponseDto extends SuccessInterceptorResponse<SignUpResponseDto> {}
