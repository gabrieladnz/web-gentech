import { Component } from '@angular/core';
import { TokenService } from '../../services/token/token.service';
import { AdminService } from '../../services/admin/admin.service';
import { UserServiceService } from '../../services/user/user-service.service';
import { ErrorResponse } from '../../models/http/interface-http';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-forum-selecionado',
  templateUrl: './forum-selecionado.component.html',
  styleUrl: './forum-selecionado.component.scss'
})
export class ForumSelecionadoComponent {
  private isLiked: boolean = false
  public likeImageSrc: string = 'assets/icons/curtir.svg';
  protected content = new FormControl('');
  public errorMessage = '';

  public constructor(public tokenService: TokenService, public adminService: AdminService, public userService: UserServiceService) { }

  curtir() {
    this.isLiked = !this.isLiked //muda o estado entre true e false sempre que clicado
    if (this.isLiked == true) { // se for verdadeiro muda para a imagem 'curtido'
      this.likeImageSrc = 'assets/icons/curtido.svg'; // caminho para a imagem curtida
    } else { // se for falso muda para a imagem 'curtir'
      this.likeImageSrc = 'assets/icons/curtir.svg'; // caminho para a imagem curitr
    }
  }

  protected async comentarForum(slug: string): Promise<void> {
    try {
      await this.userService.comentarForum(slug, this.content.value);
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    } finally {
      this.content.reset();
    }
  }
}
