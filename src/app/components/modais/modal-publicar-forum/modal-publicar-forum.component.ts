import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from '../../../services/user/user-service.service';
import { ErrorResponse } from '../../../models/http/interface-http';

@Component({
  selector: 'app-modal-publicar-forum',
  templateUrl: './modal-publicar-forum.component.html',
  styleUrl: './modal-publicar-forum.component.scss',
})
export class ModalPublicarForumComponent {
  protected criarForumForm!: FormGroup;
  public errorMessage = '';

  public constructor(
    public dialogRef: MatDialogRef<ModalPublicarForumComponent>,
    private userService: UserServiceService,
    private formBuilder: FormBuilder
  ) {
    this.criarForumForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  protected cancelarCriacao(): void {
    this.dialogRef.close();
  }

  protected async criarForum(): Promise<void> {
    try {
      await this.userService.criarForum(this.criarForumForm.value);
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    } finally {
      this.cancelarCriacao();
    }
  }
}
