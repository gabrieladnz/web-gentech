import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user/user-service.service';
import { ErrorResponse } from '../../models/http/interface-http';
import { TokenService } from '../../services/token/token.service';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public hide = true;
  public errorMessage = '';
  protected loginForm!: FormGroup;
  protected credenciaisInvalidas: boolean = false;
  public carregando = false;

  public constructor(private formBuilder: FormBuilder, private userService: UserServiceService, private tokenService: TokenService, private router: Router, private adminService: AdminService) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.min(3)]],
    });
  }

  /**
   * Função responsável por realizar o login do usuário
   */
  protected async loginUsuario(): Promise<void> {
    this.carregando = true;

    try {
      const loginResponse = await this.userService.login(this.loginForm.value);
      this.tokenService.save(loginResponse.data.token);
      this.adminService.alterarStatusAdmin(loginResponse.data.isAdmin);
      this.router.navigate(['/home']);
      this.carregando = false;
    } catch (error) {
      this.credenciaisInvalidas = true;
      this.errorMessage = `${(error as ErrorResponse).message}`;
      this.carregando = false;
    }
  }
}
