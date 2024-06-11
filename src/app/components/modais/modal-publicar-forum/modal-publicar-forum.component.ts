import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from '../../../services/user/user-service.service';

@Component({
  selector: 'app-modal-publicar-forum',
  templateUrl: './modal-publicar-forum.component.html',
  styleUrl: './modal-publicar-forum.component.scss',
})
export class ModalPublicarForumComponent {
  public constructor(
    public dialogRef: MatDialogRef<ModalPublicarForumComponent>,
    private userService: UserServiceService,
    private formBuilder: FormBuilder
  ) {}

  protected cancelarCriacao(): void {
    this.dialogRef.close();
  }
}
