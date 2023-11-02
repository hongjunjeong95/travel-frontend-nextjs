import { AppConfig } from "@config/vars/app.config";
import { ClientAuthService } from "../services/auth/auth.service";
import { ClientHttpClient } from "./client.http";

export const clientApi = {
  auth: ClientAuthService.getInstance(
    new ClientHttpClient(AppConfig.serverUrl as string)
  ),
};
