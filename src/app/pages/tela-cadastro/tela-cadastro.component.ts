import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ErrorResponse } from '../../models/http/interface-http';
import { UserServiceService } from '../../services/user/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrl: './tela-cadastro.component.scss',
})
export class TelaCadastroComponent {
  public hide: boolean = true;
  public numerosAvatar: number[] = [];
  public avatarSelecionado!: number;
  public errorMessage = '';
  protected cadastroForm!: FormGroup;
  protected emailPattern = /^[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  protected credenciaisInvalidas: boolean = false;

  public constructor(private formBuilder: FormBuilder, private userService: UserServiceService, private router: Router) {
    this.gerarNumerosAleatorios();

    this.cadastroForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.min(3)]],
      profilePhotoUrl: [''],
    });
  }

  /**
   * Gera 8 números aleatórios
   */
  protected gerarNumerosAleatorios(): void {
    for (let i = 0; i < 8; i++) {
      this.numerosAvatar.push(Math.floor(Math.random() * 100) + 1);
    }
  }

  /**
   * Faz a pesquisa dos avatares para a API, passando os números gerados aleatoriamente e exibindo no menu
   *
   * @param numeroGerado números aleatórios gerados
   * @returns caminho com o svg do avatar gerado
   */
  protected exibirAvatar(numeroGerado: number): string {
    return 'https://api.multiavatar.com/' + numeroGerado;
  }

  /**
   * Identifica qual o avatar foi selecionado e guarda esse valor para usar em outras funções
   *
   * @param number número do avatar selecionado
   */
  protected selecionarAvatar(number: number): void {
    this.avatarSelecionado = number;
    this.cadastroForm.patchValue({ profilePhotoUrl: this.exibirAvatar(this.avatarSelecionado) });
  }

  protected get emailInput(): AbstractControl<string> | null {
    return this.cadastroForm.get('email');
  }

  /**
   * Função responsável por realizar o cadastro do usuário comum
   */
  protected async cadastrarUsuario(): Promise<void> {
    try {
      const cadastroResponse = await this.userService.cadastrar(this.cadastroForm.value);
      this.router.navigate(['/login']);
    } catch (error) {
      this.credenciaisInvalidas = true;
      this.errorMessage = `${(error as ErrorResponse).message}`;
    }
  }
}
