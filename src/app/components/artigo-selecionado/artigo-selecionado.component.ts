import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

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

  public constructor(private location: Location, private router: Router) {}

  public ngOnInit(): void {
    const dadosArtigo = history.state.dadosArtigo;
    this.title = dadosArtigo.title;
    this.publicationContent = dadosArtigo.publicationContent;
    this.coverImageUrl = dadosArtigo.coverImageUrl;
    this.createAt = dadosArtigo.createAt;
    this.author = dadosArtigo.author.fullName;
    this.username = dadosArtigo.author.username;
    this.category = dadosArtigo.category.name;
    this.profilePhotoUrl = dadosArtigo.author.profilePhotoUrl;
    console.log(dadosArtigo)
  }

  protected retornarPagina(): void { this.location.back(); }
}
