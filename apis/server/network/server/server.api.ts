import { AppConfig } from "@config/vars/app.config";
import { ServerHttpClient } from "./server.http";
import { ServerUserService } from "apis/server/services/user/user.service";

export const serverApi = {
  users: ServerUserService.getInstance(
    new ServerHttpClient(AppConfig.serverUrl as string)
  ),
};
