import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TokenService } from '../../services/token/token.service';
import { ModalPublicarForumComponent } from '../../components/modais/modal-publicar-forum/modal-publicar-forum.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent {
  protected formularioCarregando: boolean = false;

  public constructor(private location: Location, public tokenService: TokenService, public dialog: MatDialog) {}

  protected retornarPagina(): void { this.location.back(); }

  protected publicarForum(): void {
    this.dialog.open(ModalPublicarForumComponent, { disableClose: true,  width: '500px' });
  }
}
