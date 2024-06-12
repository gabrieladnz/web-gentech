import { Timestamp } from 'rxjs';
import { SuccessResponse } from '../../models/http/interface-http';

/** Interface padrão dos dados enviados na Request */
export interface CadastroRequest {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  profilePhotoUrl: string;
}

/**
 * Interface que representa uma solicitação de login.
 * Contém o nome de usuário e a senha necessários para o login.
 *
 */
export interface LoginRequest {
  userName: string;
  password: string;
}

/**
 * Interface representando a criação de um artigo.
 */
export interface CriarArtigoRequest {
  title: string;
  publicationContent: string;
  coverImageUrl?: string;
  category?: string;
}

export interface DeletarArtigoRequest {
  slug: string;
}

/** Interface padrão dos dados recebidos na Response */
export interface CadastroResponse extends SuccessResponse {
  data: {};
}

/**
 * Interface que representa uma resposta bem-sucedida de login.
 * Extende de uma resposta genérica de sucesso.
 */
export interface LoginResponse extends SuccessResponse {
  data: {
    token: string;
    isAdmin:  boolean;
  };
}

/**
 * Interface que representa uma resposta bem-sucedida na criação do artigo.
 */
export interface CriarArtigoResponse extends SuccessResponse {
  data: {
    publication: {
      slug: string;
      author: string;
      title: string;
      publicationContent: string;
      coverImageUrl: string;
      category?: string;
      createdAt: Timestamp<Date>;
    };
  };
}

export interface EditarArtigoResponse extends SuccessResponse {
  data: {
    slug: string,
    title: string,
    publicationContent: string,
    coverImageUrl: string,
    createAt: Date,
    updateAt: Date,
    author: {
      fullName: string,
      username: string,
      profilePhotoUrl: string
    },
    category: {
      name: string
    }
  }
}

export interface DeletarArtigoResponse extends SuccessResponse {
  data: {}
}

export interface ListarTodosArtigosResponse extends SuccessResponse {
  data: {
    allPublication: [
      {
        slug: string,
        title: string,
        publicationContent: string,
        coverImageUrl: string,
        createAt: Date
        author: {
          fullName: string,
          username: string,
          profilePhotoUrl: string
        },
        category: {
          name: string
        }
      },
    ]
  }
}

export interface ListarCategoriasResponse extends SuccessResponse {
  data: {
    categories: {
      category: string,
    }[];
  };
}

export interface ListarForumsResponse extends SuccessResponse {
  data: {
    forums: {
      slug: string;
      title: string;
      description: string;
      createdAt: string;
      author: {
        fullName: string;
        userName: string;
        profilePhotoUrl: string;
      };
    }[];
  };
}
