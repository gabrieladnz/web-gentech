import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user/user-service.service';
import { ErrorResponse } from '../../models/http/interface-http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public hide = true;
  public errorMessage = '';
  protected loginForm!: FormGroup;

  public constructor(private formBuilder: FormBuilder, private userService: UserServiceService) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.min(3)]],
    });
  }

  /**
   * Função responsável por realizar o login do usuário
   */
  protected async loginUsuario(): Promise<void> {
    try {
      console.log(this.loginForm.value)
      // const loginResponse = await this.userService.login(this.loginForm.value);
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    }
  }
}
