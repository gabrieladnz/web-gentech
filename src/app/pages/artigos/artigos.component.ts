import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ErrorResponse } from '../../models/http/interface-http';
import { UserServiceService } from '../../services/user/user-service.service';
import { Artigo, Categorias } from './artigo.interface';
import { ModalEditarArtigoComponent } from '../../components/modais/modal-editar-artigo/modal-editar-artigo.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token/token.service';
import { AdminService } from '../../services/admin/admin.service';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrl: './artigos.component.scss',
})
export class ArtigosComponent {
  public errorMessage = '';
  protected artigos: Artigo[] = [];
  protected artigosFiltrados: Artigo[] = [];
  public carregando = true;
  protected listaCategorias: Categorias[] = [];
  protected categoriaSelecionada: string = "";

  constructor(private location: Location, public tokenService: TokenService, private userService: UserServiceService, public dialog: MatDialog, private router: Router, public adminService: AdminService) {
    this.exibirArtigos();
    this.retornarCategorias();
  }

  protected retornarPagina(): void { this.location.back(); }

  protected filtrarInput(event: Event): void {
    this.artigosFiltrados = this.artigos.filter(artigo =>
      artigo.title && artigo.title.toLowerCase().includes((event.target as HTMLInputElement).value.toLowerCase())
    );
  }

  protected async exibirArtigos(): Promise<void> {
    try {
      const retorno = await this.userService.listarTodosArtigos();
      this.artigos = retorno.data.allPublication;
      this.artigosFiltrados = [...this.artigos];
      this.carregando = false;
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
      this.carregando = false;
    }
  }

  protected async deletarArtigoSelecionado(data: any): Promise<void> {
    try {
      await this.userService.deletarArtigoCriado(data);
      this.exibirArtigos();
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    }
  }

  protected editarArtigoSelecionado(dadosArtigo: any): void {
    const dialogRef = this.dialog.open(ModalEditarArtigoComponent, {
      disableClose: false,
      data: {
        slug: dadosArtigo.slug,
        title: dadosArtigo.title,
        publicationContent: dadosArtigo.publicationContent,
        category: dadosArtigo.category.name,
        coverImageUrl: dadosArtigo.coverImageUrl
      }
    });

    dialogRef.afterClosed().subscribe(retorno => {
      console.log(retorno);
      this.exibirArtigos();
    });
  }

  protected abrirArtigo(dadosArtigo: any): void {
    this.router.navigate(["/artigo-selecionado"], { state: { dadosArtigo } })
  }

  protected async retornarCategorias(): Promise<void> {
    try {
      const response = await this.userService.listarCategorias();
      this.listaCategorias = response.data.categories;
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    }
  }

  protected filtrarPorCategoria(categoria: string): void {
    this.categoriaSelecionada = categoria;
    this.artigosFiltrados = this.artigos.filter(artigo => artigo.category && artigo.category.name === categoria);
  }
}
