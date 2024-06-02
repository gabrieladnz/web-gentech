import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from '../../../services/user/user-service.service';
import { ErrorResponse } from '../../../models/http/interface-http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-publicar-artigo',
  templateUrl: './modal-publicar-artigo.component.html',
  styleUrl: './modal-publicar-artigo.component.scss'
})
export class ModalPublicarArtigoComponent {
  public errorMessage = '';
  protected criarArtigoForm!: FormGroup;

  public constructor(public dialogRef: MatDialogRef<ModalPublicarArtigoComponent>, private userService: UserServiceService, private formBuilder: FormBuilder) {
    this.criarArtigoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      publicationContent: ['', [Validators.required]],
      coverImageUrl: [''],
      category: [''],
    });
  }

  protected cancelarCriacao(): void {
    this.dialogRef.close();
  }

  protected async criarArtigo(): Promise<void> {
    try {
      await this.userService.criarArtigo(this.criarArtigoForm.value);
      this.cancelarCriacao();
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    }
  }
}
