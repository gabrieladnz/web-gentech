import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { ErrorResponse } from '../../models/http/interface-http';
import { CriarArtigoRequest, CriarArtigoResponse, DeletarArtigoRequest, DeletarArtigoResponse, EditarArtigoResponse, ListarTodosArtigosResponse, LoginRequest, LoginResponse } from './user-service.interface';
import { CadastroRequest, CadastroResponse } from './user-service.interface';

@Injectable({
  providedIn: 'root',
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
        this.httpClient.post<LoginResponse>(this.BASE_URL + '/login', data)
      );
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'Username ou senha inválidos.',
      };
      throw errorResponse;
    }
  }

  /**
   * Método para realizar o cadastro de um novo usuário.
   *
   * @param data - Dados de solicitação de cadastro, contendo nome de usuário, senha e email.
   * @returns Uma Promise que resolve com um CadastroResponse se o cadastro for bem-sucedido.
   * @throws ErrorResponse se o cadastro falhar.
   */
  public async cadastrar(data: CadastroRequest): Promise<CadastroResponse> {
    try {
      return await lastValueFrom(
        this.httpClient.post<CadastroResponse>(
          this.BASE_URL + '/register_common_user',
          data
        )
      );
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'Erro ao cadastrar usuário',
      };
      throw errorResponse;
    }
  }

  /**
   * Método para criar um usuário admin.
   */
  public async criarUsuarioAdmin(data: CadastroRequest): Promise<CadastroResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<CadastroResponse>(this.BASE_URL + '/register_common_admin', data));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'Erro ao cadastrar usuário administrador.',
      };
      throw errorResponse;
    }
  }

  /**
   * Método para criar um novo artigo.
   */
  public async criarArtigo(data: CriarArtigoRequest): Promise<CriarArtigoResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<CriarArtigoResponse>(this.BASE_URL + '/publication-create', data))
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'Erro ao criar artigo.',
      };
      throw errorResponse;
    }
  }

  public async editarArtigoCriado(slug: string, data: CriarArtigoRequest): Promise<EditarArtigoResponse> {
    try {
      return await lastValueFrom(this.httpClient.patch<EditarArtigoResponse>(`${this.BASE_URL}/publication/edit/${slug}`, data));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'Erro ao editar artigo.',
      };
      throw errorResponse;
    }
  }

  public async deletarArtigoCriado(data: DeletarArtigoRequest): Promise<DeletarArtigoResponse> {
    try {
      return await lastValueFrom(this.httpClient.delete<DeletarArtigoResponse>(`${this.BASE_URL}/publication/delete/${data.slug}`));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'Erro ao deletar artigo.',
      };
      throw errorResponse;
    }
  }

  public async listarTodosArtigos(): Promise<ListarTodosArtigosResponse> {
    try {
      return await lastValueFrom(this.httpClient.get<ListarTodosArtigosResponse>(`${this.BASE_URL}/publications`));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'Erro ao listar artigos.',
      };
      throw errorResponse;
    }
  }

  public async listarArtigosPorAutor(userName: String): Promise<ListarTodosArtigosResponse> {
    try {
      return await lastValueFrom(this.httpClient.get<ListarTodosArtigosResponse>(`${this.BASE_URL}/profile/${userName}`));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'Erro ao listar artigo por autor.',
      };
      throw errorResponse;
    }
  }
}
