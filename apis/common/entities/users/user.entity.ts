import { CommonEntity } from "../common.entity";

export class User extends CommonEntity {
  username: string;
  email: string;
  password?: string;
}

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}
