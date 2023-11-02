import { SignInBodyDto } from "@client/apis/dtos/auth/sign-in.dto";
import { SignUpBodyDto } from "@client/apis/dtos/auth/sign-up.dto";
import { ClientHttpClient } from "@client/apis/network/client.http";
import { SuccessInterceptorResponse } from "apis/common/dto/interceptor-response.dto";

export class ClientAuthService {
  constructor(private readonly http: ClientHttpClient) {
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  private static instance: ClientAuthService;

  public static getInstance(http: ClientHttpClient) {
    return this.instance || (this.instance = new this(http));
  }

  private readonly URL = "/auth";

  async signUp(body: SignUpBodyDto): Promise<SuccessInterceptorResponse<void>> {
    const data = await this.http.PlainAPI<void, SignUpBodyDto>(
      `${this.URL}/signup`,
      {
        method: "POST",
        data: {
          ...body,
        },
      }
    );

    return data;
  }

  async signIn(body: SignInBodyDto): Promise<SuccessInterceptorResponse<void>> {
    const data = await this.http.PlainAPI<void, SignInBodyDto>(
      `${this.URL}/signin`,
      {
        method: "POST",
        data: {
          ...body,
        },
      }
    );

    return data;
  }
}
