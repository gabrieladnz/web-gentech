import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ErrorResponse } from '../../models/http/interface-http';
import { UserServiceService } from '../../services/user/user-service.service';
import { Artigo } from './artigo.interface';
import { ModalEditarArtigoComponent } from '../../components/modais/modal-editar-artigo/modal-editar-artigo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrl: './artigos.component.scss',
})
export class ArtigosComponent {
  public errorMessage = '';
  protected artigos: Artigo[] = [];
  protected artigosFiltrados: Artigo[] = [];

  constructor(private location: Location, private userService: UserServiceService, public dialog: MatDialog) {
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
      this.artigosFiltrados = [...this.artigos]
      console.log(this.artigos, retorno.data.allPublication, this.artigosFiltrados);
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    }
  }

  protected async deletarArtigoSelecionado(data: any): Promise<void> {
    try {
      await this.userService.deletarArtigoCriado(data);
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
        publicationContent: dadosArtigo.publicationContent
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
