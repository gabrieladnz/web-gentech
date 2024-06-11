import { Component } from '@angular/core';


@Component({
  selector: 'app-forum-selecionado',
  templateUrl: './forum-selecionado.component.html',
  styleUrl: './forum-selecionado.component.scss'
})
export class ForumSelecionadoComponent {

  private isLiked: boolean = false
  public likeImageSrc: string = 'assets/icons/curtir.svg'; // Caminho para a imagem 'curtir'

  curtir() {
    this.isLiked = !this.isLiked //muda o estado entre true e false sempre que clicado
    if (this.isLiked == true) { // se for verdadeiro muda para a imagem 'curtido'
      this.likeImageSrc = 'assets/icons/curtido.svg'; // caminho para a imagem curtida
    } else { // se for falso muda para a imagem 'curtir'
      this.likeImageSrc = 'assets/icons/curtir.svg'; // caminho para a imagem curitr
    }
  }

}
