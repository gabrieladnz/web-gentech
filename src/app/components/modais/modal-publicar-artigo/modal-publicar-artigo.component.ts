import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-publicar-artigo',
  templateUrl: './modal-publicar-artigo.component.html',
  styleUrl: './modal-publicar-artigo.component.scss'
})
export class ModalPublicarArtigoComponent {
  public constructor(public dialogRef: MatDialogRef<ModalPublicarArtigoComponent>) {}

  protected cancelarCriacao(): void {
    this.dialogRef.close();
  }
}
