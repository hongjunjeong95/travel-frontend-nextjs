import { HttpClient } from "./http";
import { AuthService } from "../services/auth/auth.service";
import { AppConfig } from "@/common/config/vars/app.config";

export const apiClient = {
  auth: AuthService.getInstance(new HttpClient(AppConfig.serverUrl as string)),
};
