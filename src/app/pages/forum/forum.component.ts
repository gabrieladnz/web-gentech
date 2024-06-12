import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TokenService } from '../../services/token/token.service';
import { ModalPublicarForumComponent } from '../../components/modais/modal-publicar-forum/modal-publicar-forum.component';
import { MatDialog } from '@angular/material/dialog';
import { ErrorResponse } from '../../models/http/interface-http';
import { UserServiceService } from '../../services/user/user-service.service';
import { Forum } from './forum.interface';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent {
  protected formularioCarregando: boolean = false;
  protected foruns: Forum[] = [];
  protected forunsFiltrados: Forum[] = [];
  public carregando = true;
  public errorMessage = '';

  public constructor(private location: Location, public tokenService: TokenService, public dialog: MatDialog, private userService: UserServiceService) {
    this.exibirForuns();
  }

  protected retornarPagina(): void { this.location.back(); }

  protected publicarForum(): void {
    const dialog = this.dialog.open(ModalPublicarForumComponent, { disableClose: true, width: '500px' });

    dialog.afterClosed().subscribe(retorno => { this.exibirForuns(); });
  }

  protected filtrarInput(event: Event): void {
    this.forunsFiltrados = this.foruns.filter(foruns =>
      foruns.title && foruns.title.toLowerCase().includes((event.target as HTMLInputElement).value.toLowerCase())
    );
  }

  protected async exibirForuns(): Promise<void> {
    try {
      const retorno = await this.userService.listarForuns();
      this.foruns = retorno.data.forums;
      this.forunsFiltrados = [...this.foruns]
      this.forunsFiltrados.reverse();
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    } finally {
      this.carregando = false;
    }
  }
}
