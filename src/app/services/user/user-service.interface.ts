import { SuccessResponse } from "../../models/http/interface-http";

/** Interface padrão dos dados enviados na Request */
export interface CadastroRequest {
  fullName: String;
  userName: String;
  email: String;
  password: String;
  profilePhotoUrl: String;
}

export interface LoginRequest {
  userName: String;
  password: String;
}

/** Interface padrão dos dados recebidos na Response */
export interface CadastroResponse extends SuccessResponse {
  data: {}
}

export interface LoginResponse extends SuccessResponse {
  data: {}
}
