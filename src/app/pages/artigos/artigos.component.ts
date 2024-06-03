import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ErrorResponse } from '../../models/http/interface-http';
import { UserServiceService } from '../../services/user/user-service.service';
import { Artigo } from './artigo.interface';
import { ModalEditarArtigoComponent } from '../../components/modais/modal-editar-artigo/modal-editar-artigo.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

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

  constructor(private location: Location, private userService: UserServiceService, public dialog: MatDialog, private router: Router) {
    this.exibirArtigos();
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
        category: dadosArtigo.category.name
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
}
