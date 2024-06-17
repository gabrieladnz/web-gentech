import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../../services/user/user-service.service';
import { ErrorResponse } from '../../../models/http/interface-http';

@Component({
  selector: 'app-modal-editar-artigo',
  templateUrl: './modal-editar-artigo.component.html',
  styleUrls: ['./modal-editar-artigo.component.scss'],
})
export class ModalEditarArtigoComponent {
  private slug: string;
  public errorMessage = '';
  public editarArtigoForm: FormGroup;
  public previaImagem: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalEditarArtigoComponent>,
    private userService: UserServiceService,
    private formBuilder: FormBuilder
  ) {
    this.editarArtigoForm = this.formBuilder.group({
      title: [data.title, [Validators.required]],
      publicationContent: [data.publicationContent, [Validators.required]],
      coverImageUrl: [data.coverImageUrl],
      category: [data.category],
    });

    this.slug = data.slug;
    this.previaImagem = data.coverImageUrl;
  }

  protected cancelarEdicao(): void {
    this.dialogRef.close();
  }

  protected async editarArtigo(): Promise<void> {
    try {
      const formData = new FormData();
      formData.append('title', this.editarArtigoForm.get('title')?.value);
      formData.append('publicationContent', this.editarArtigoForm.get('publicationContent')?.value);
      formData.append('category', this.editarArtigoForm.get('category')?.value);

      const coverImage = this.editarArtigoForm.get('coverImageUrl')?.value;
      if (coverImage instanceof File) {
        formData.append('coverImageUrl', coverImage, coverImage.name);
      } else {
        formData.append('coverImageUrl', new Blob([coverImage], { type: 'image/jpeg' }));
      }

      await this.userService.editarArtigoCriado(this.slug, formData);
      this.cancelarEdicao();
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    }
  }

  protected processarImagem(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.editarArtigoForm.patchValue({ coverImageUrl: file });

      const reader = new FileReader();
      reader.onload = () => {
        this.previaImagem = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
