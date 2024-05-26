import { SuccessResponse } from "../../models/http/interface-http";

/**
  * Interface que representa uma solicitação de login.
 * Contém o nome de usuário e a senha necessários para o login.
 *
 */
export interface LoginRequest {
  userName: String;
  password: String;
}

/**
 * Interface que representa uma resposta bem-sucedida de login.
 * Extende de uma resposta genérica de sucesso.
 */
export interface LoginResponse extends SuccessResponse {
  data: {}
}

/**
 * Interface que representa uma solicitação de cadastro.
 * Contém o nome de usuário, senha e email necessários para o cadastro.
 */
export interface CadastroRequest {
  username: string;
  password: string;
  email: string;
}

/**
 * Interface que representa uma resposta bem-sucedida de cadastro.
 * Extende de uma resposta genérica de sucesso.
 */
export interface CadastroResponse extends SuccessResponse {
  data: {};
}