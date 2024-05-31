import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrl: './artigos.component.scss',
})
export class ArtigosComponent {
  artigos = [{
    titulo: 'Teste',
    categoria: 'testes',
    texto: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galle',
    data: '',
    imagem: ''
  }];

  artigosFiltrados = [...this.artigos];

  constructor(private location: Location) { }

  protected retornarPagina(): void { this.location.back(); }

  protected filtrarInput(event: Event): void {
    this.artigosFiltrados = this.artigos.filter(artigo =>
      artigo.titulo.toLowerCase().includes((event.target as HTMLInputElement).value.toLowerCase())
    );
  }
}
