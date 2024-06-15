import { UserServiceService } from './../../services/user/user-service.service';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ErrorResponse } from '../../models/http/interface-http';

@Component({
  selector: 'app-artigo-selecionado',
  templateUrl: './artigo-selecionado.component.html',
  styleUrl: './artigo-selecionado.component.scss'
})
export class ArtigoSelecionadoComponent {
  protected title: string = '';
  protected publicationContent: string = '';
  protected coverImageUrl: string = '';
  protected createAt: string = '';
  protected author: string = '';
  protected username: string = '';
  protected category: string = ''
  protected profilePhotoUrl: string = '';
  protected slug!: string;
  public errorMessage = '';
  public carregando: boolean = true;

  public constructor(private location: Location, private route: ActivatedRoute, private userService: UserServiceService) { }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.carregarArtigo();
    });
  }

  protected retornarPagina(): void { this.location.back(); }

  protected async carregarArtigo(): Promise<void> {
    try {
      const dadosArtigo = await this.userService.consultarArtigoSelecionado(this.slug);
      this.title = dadosArtigo.data.publication.title;
      this.publicationContent = dadosArtigo.data.publication.publicationContent;
      this.coverImageUrl = dadosArtigo.data.publication.coverImageUrl;
      this.createAt = dadosArtigo.data.publication.createAt;
      this.author = dadosArtigo.data.publication.author.fullName;
      this.username = dadosArtigo.data.publication.author.username;
      this.category = dadosArtigo.data.publication.category.name;
      this.profilePhotoUrl = dadosArtigo.data.publication.author.profilePhotoUrl;

    } catch (error) {
      this.errorMessage = `${(error as ErrorResponse).message}`;
    } finally {
      this.carregando = false;
    }
  }
}
