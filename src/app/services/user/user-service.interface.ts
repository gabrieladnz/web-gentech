import { SuccessResponse } from "../../models/http/interface-http";

/** Interface padrão dos dados enviados na Request */
export interface CadastroRequest {
  fullName: String;
  userName: String;
  email: String;
  password: String;
  profilePhotoUrl: String;
}

/**
  * Interface que representa uma solicitação de login.
 * Contém o nome de usuário e a senha necessários para o login.
 *
 */
export interface LoginRequest {
  userName: String;
  password: String;
}

/** Interface padrão dos dados recebidos na Response */
export interface CadastroResponse extends SuccessResponse {
  data: {}
}


/**
 * Interface que representa uma resposta bem-sucedida de login.
 * Extende de uma resposta genérica de sucesso.
 */
export interface LoginResponse extends SuccessResponse {
  data: {}
}
