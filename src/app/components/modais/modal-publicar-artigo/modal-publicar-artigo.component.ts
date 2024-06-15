import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from '../../../services/user/user-service.service';
import { ErrorResponse } from '../../../models/http/interface-http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-publicar-artigo',
  templateUrl: './modal-publicar-artigo.component.html',
  styleUrls: ['./modal-publicar-artigo.component.scss']
})
export class ModalPublicarArtigoComponent {
  public errorMessage = '';
  public criarArtigoForm!: FormGroup;
  public previaImagem: string | ArrayBuffer | null = null;

  constructor(
    public dialogRef: MatDialogRef<ModalPublicarArtigoComponent>,
    private userService: UserServiceService,
    private formBuilder: FormBuilder
  ) {
    this.criarArtigoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      publicationContent: ['', [Validators.required]],
      coverImageUrl: [''],
      category: ['']
    });
  }

  cancelarCriacao(): void {
    this.dialogRef.close();
  }

  async criarArtigo(): Promise<void> {
    try {
      const formData = new FormData();
      formData.append('title', this.criarArtigoForm.get('title')?.value);
      formData.append('publicationContent', this.criarArtigoForm.get('publicationContent')?.value);
      formData.append('category', this.criarArtigoForm.get('category')?.value);

      const coverImage = this.criarArtigoForm.get('coverImageUrl')?.value;
      if (coverImage instanceof File) {
        formData.append('coverImageUrl', coverImage, coverImage.name);
      }

      await this.userService.criarArtigo(formData);
      this.cancelarCriacao();
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    }
  }

  processarImagem(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.criarArtigoForm.patchValue({ coverImageUrl: file });

      const reader = new FileReader();
      reader.onload = () => {
        this.previaImagem = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
