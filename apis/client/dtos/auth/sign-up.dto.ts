import { UserRole } from "apis/common/entities/users/user.entity";

export type SignUpBodyDto = {
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
};
