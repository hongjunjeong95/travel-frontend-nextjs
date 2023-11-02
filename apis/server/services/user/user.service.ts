import { ServerHttpClient } from "@server/apis/network/server/server.http";
import { SuccessInterceptorResponse } from "apis/common/dto/interceptor-response.dto";
import { User } from "apis/common/entities/users/user.entity";

export class ServerUserService {
  constructor(private readonly http: ServerHttpClient) {
    this.me = this.me.bind(this);
  }

  private static instance: ServerUserService;

  public static getInstance(http: ServerHttpClient) {
    return this.instance || (this.instance = new this(http));
  }

  private readonly URL = "/users";

  async me(): Promise<SuccessInterceptorResponse<User>> {
    return this.http.API<User, undefined>(`${this.URL}/me`, {
      method: "GET",
    });
  }
}
