import { Component } from '@angular/core';
import { TokenService } from '../../services/token/token.service';
import { AdminService } from '../../services/admin/admin.service';
import { UserServiceService } from '../../services/user/user-service.service';
import { ErrorResponse } from '../../models/http/interface-http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-forum-selecionado',
  templateUrl: './forum-selecionado.component.html',
  styleUrl: './forum-selecionado.component.scss'
})
export class ForumSelecionadoComponent {
  private isLiked: boolean = false
  public likeImageSrc: string = 'assets/icons/curtir.svg';
  protected content = new FormControl('');
  protected slug!: string;
  public errorMessage = '';
  public title: string = '';
  public description: string = '';
  public createdAt: string = '';
  public user: string = '';
  public fullName: string = '';
  public profilePhoto: string = '';
  protected comentariosDoForum: any;
  public carregando: boolean = true;

  public constructor(public tokenService: TokenService, private route: ActivatedRoute, public adminService: AdminService, public userService: UserServiceService, private location: Location) { }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.carregarForum();
      this.carregarComentariosForum();
    })
  }

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
      this.carregarComentariosForum();
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    } finally {
      this.content.reset();
    }
  }

  protected async carregarForum(): Promise<void> {
    try {
      const dadosForum = await this.userService.consultarForumSelecionado(this.slug);
      this.title = dadosForum.data.forum.title;
      this.description = dadosForum.data.forum.description;
      this.createdAt = dadosForum.data.forum.createdAt;
      this.user = dadosForum.data.forum.author.username;
      this.fullName = dadosForum.data.forum.author.fullName;
      this.profilePhoto = dadosForum.data.forum.author.profilePhotoUrl;
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    }
  }

  protected async carregarComentariosForum(): Promise<void> {
    try {
      const retorno = await this.userService.consultarComentariosPorForum(this.slug);
      this.comentariosDoForum = retorno.data.comments;
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    } finally {
      this.carregando = false;
    }
  }

  protected async deletarComentarioForum(id: string): Promise<void> {
    try {
      await this.userService.deletarComentarioForum(id);
    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    } finally {
      this.carregarComentariosForum();
    }
  }
}
