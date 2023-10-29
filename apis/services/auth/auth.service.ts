import { SignUpBodyDto, SignUpResponseDto } from "@/apis/dtos/auth/sign-up.dto";
import { HttpClient } from "@/apis/network/http";

export class AuthService {
  constructor(private readonly http: HttpClient) {}

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
}
