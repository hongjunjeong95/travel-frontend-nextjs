import { serverApi } from "@server/apis/network/server/server.api";

const userService = serverApi.users;

export const useMeQuery = () => userService.me();
