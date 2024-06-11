import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPublicarArtigoComponent } from '../../components/modais/modal-publicar-artigo/modal-publicar-artigo.component';
import { ModalCadastrarAdminComponent } from '../../components/modais/modal-cadastrar-admin/modal-cadastrar-admin.component';

@Component({
  selector: 'app-painel-admin',
  templateUrl: './painel-admin.component.html',
  styleUrl: './painel-admin.component.scss'
})
export class PainelAdminComponent {
  public errorMessage = '';

  public constructor(public dialog: MatDialog) {}

  protected criarArtigo(): void {
    this.dialog.open(ModalPublicarArtigoComponent, { disableClose: true });
  }

  protected cadastrarAdmin(): void {
    this.dialog.open(ModalCadastrarAdminComponent, { disableClose: true });
  }
}
