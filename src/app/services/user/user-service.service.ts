import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { ErrorResponse } from '../../models/http/interface-http';
import { LoginRequest, LoginResponse } from './user-service.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService extends RequestService {

  public constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  /**
 * Método para realizar o login do usuário.
 * 
 * @param data - Dados de solicitação de login, contendo nome de usuário e senha.
 * @returns Uma promise que responde em um LoginResponse se o login for bem-sucedido.
 * @throws ErrorResponse se o login falhar.
 */
  public async login(data: LoginRequest): Promise<LoginResponse> {
    try {
      return await lastValueFrom(
        this.httpClient.post<LoginResponse>(this.BASE_URL + '/rota-back-end', data)
      );
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'Username ou senha inválidos.'
      };
      throw errorResponse;
    }
  }
}


