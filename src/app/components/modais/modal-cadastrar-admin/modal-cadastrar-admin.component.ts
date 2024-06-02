import { Component } from '@angular/core';
import { UserServiceService } from '../../../services/user/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorResponse } from '../../../models/http/interface-http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cadastrar-admin',
  templateUrl: './modal-cadastrar-admin.component.html',
  styleUrl: './modal-cadastrar-admin.component.scss'
})
export class ModalCadastrarAdminComponent {
  protected registerFormAdmin: FormGroup;
  public errorMessage = '';
  public hide: boolean = true;
  protected emailPattern = /^[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  public constructor(private userService: UserServiceService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ModalCadastrarAdminComponent>) {
    this.registerFormAdmin = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.min(3)]],
      profilePhotoUrl: [''],
    });
  }

  protected cancelarCriacao(): void {
    this.dialogRef.close();
  }

  protected async cadastrarAdmin(): Promise<void> {
    try {
      await this.userService.criarUsuarioAdmin(this.registerFormAdmin.value);
      this.cancelarCriacao();
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    }
  }
}
