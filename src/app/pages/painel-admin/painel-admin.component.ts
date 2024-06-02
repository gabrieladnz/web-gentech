import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPublicarArtigoComponent } from '../../components/modais/modal-publicar-artigo/modal-publicar-artigo.component';

@Component({
  selector: 'app-painel-admin',
  templateUrl: './painel-admin.component.html',
  styleUrl: './painel-admin.component.scss'
})
export class PainelAdminComponent {
  public constructor(public dialog: MatDialog) {}

  criarArtigo(): void {
    const dialogRef = this.dialog.open(ModalPublicarArtigoComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
