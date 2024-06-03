import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from '../../../services/user/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorResponse } from '../../../models/http/interface-http';

@Component({
  selector: 'app-modal-editar-artigo',
  templateUrl: './modal-editar-artigo.component.html',
  styleUrl: './modal-editar-artigo.component.scss'
})
export class ModalEditarArtigoComponent {
  public errorMessage = '';
  protected editarArtigoForm: FormGroup;
  private slug: string;

  public constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ModalEditarArtigoComponent>, private userService: UserServiceService, private formBuilder: FormBuilder) {
    this.editarArtigoForm = this.formBuilder.group({
      title: [data.title, [Validators.required]],
      publicationContent: [data.publicationContent, [Validators.required]],
      coverImageUrl: [data.coverImageUrl],
      category: [data.category],
    });

    this.slug = data.slug;
  }

  protected cancelarEdicao(): void {
    this.dialogRef.close();
  }

  protected async editarArtigo(): Promise<void> {
    try {
      await this.userService.editarArtigoCriado(this.slug, this.editarArtigoForm.value);
      this.cancelarEdicao();
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    }
  }
}
