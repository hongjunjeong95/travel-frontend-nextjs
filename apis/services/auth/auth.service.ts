import { SignInBodyDto, SignInResponseDto } from "@apis/dtos/auth/sign-in.dto";
import { SignUpBodyDto, SignUpResponseDto } from "@apis/dtos/auth/sign-up.dto";
import { HttpClient } from "@apis/network/http";

export class AuthService {
  constructor(private readonly http: HttpClient) {
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  private static instance: AuthService;

  public static getInstance(http: HttpClient) {
    return this.instance || (this.instance = new this(http));
  }

  private readonly AUTH_URL = "/auth";

  async signUp(body: SignUpBodyDto): Promise<SignUpResponseDto> {
    const data = await this.http.PlainAPI<SignUpResponseDto, SignUpBodyDto>(
      `${this.AUTH_URL}/signup`,
      {
        method: "POST",
        data: {
          ...body,
        },
      }
    );

    return data;
  }

  async signIn(body: SignInBodyDto): Promise<SignInResponseDto> {
    const data = await this.http.PlainAPI<SignInResponseDto, SignInBodyDto>(
      `${this.AUTH_URL}/signin`,
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
