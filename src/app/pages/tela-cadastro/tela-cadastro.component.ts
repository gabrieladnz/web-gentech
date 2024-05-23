import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrl: './tela-cadastro.component.scss'
})
export class TelaCadastroComponent {
  public hide: boolean = true;
  public numerosAvatar: number[] = [];
  public avatarSelecionado!: number;

  public constructor() {
    this.gerarNumerosAleatorios();
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
    return 'https://api.multiavatar.com/' + numeroGerado
  }

  /**
   * Identifica qual o avatar foi selecionado e guarda esse valor para usar em outras funções
   *
   * @param number número do avatar selecionado
   */
  protected selecionarAvatar(number: number): void {
    this.avatarSelecionado = number;
  }
}
