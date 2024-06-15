import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user/user-service.service';
import { ErrorResponse } from '../../models/http/interface-http';
import { Artigo, Categorias } from '../artigos/artigo.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public errorMessage = '';
  public carregando = true;
  protected listaCategorias: Categorias[] = [];;
  protected listaArtigos: Artigo[] = [];
  protected categoriaSelecionada: string = "IA";
  protected artigosFiltrados: any;

  public constructor(private userService: UserServiceService, private router: Router) {
    this.listarArtigos();
    this.retornarCategorias();
  }

  protected async listarArtigos(): Promise<void> {
    try {
      const retorno = await this.userService.listarTodosArtigos();
      this.listaArtigos = retorno.data.allPublication.slice(0, 8);
      this.carregando = false;
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
      this.carregando = false;
    }
  }

  protected abrirArtigo(dadosArtigo: any): void {
    const url = `/artigo-selecionado/${dadosArtigo.slug}`;
    window.open(url, '_blank');
  }

  protected scrollSectionSobre(): void {
    const element = document.getElementById('sobre');
    (element) ? element.scrollIntoView({ behavior: 'smooth' }) : "";
  }

  protected async retornarCategorias(): Promise<void> {
    try {
      const response = await this.userService.listarCategorias();
      this.listaCategorias = response.data.categories;
      this.listaCategorias.reverse();
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    }
  }

  protected selecionarCategoria(categoriaSelecionada: string): void {
    this.categoriaSelecionada = categoriaSelecionada;
    this.filtrarArtigosPorCategorias();
  }

  protected filtrarArtigosPorCategorias(): void {
    this.artigosFiltrados = this.listaArtigos.filter(artigo => artigo.category?.name === this.categoriaSelecionada);
  }
}
