import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user/user-service.service';
import { ErrorResponse } from '../../models/http/interface-http';
import { Artigo } from '../artigos/artigo.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public errorMessage = '';

  // objeto temporário
  protected listaCategorias = [
    {
      categoria: 'IA'
    },
    {
      categoria: 'Computação'
    },
    {
      categoria: 'Machine Learning'
    }
  ];

  protected listaArtigos: Artigo[] = [];;

  public constructor(private userService: UserServiceService) {
    this.listarArtigos();
  }

  protected async listarArtigos(): Promise<void> {
    try {
      const retorno = await this.userService.listarTodosArtigos();
      this.listaArtigos = retorno.data.allPublication.slice(0, 8);
      console.log(this.listaArtigos, retorno.data.allPublication);
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    }
  }
}
