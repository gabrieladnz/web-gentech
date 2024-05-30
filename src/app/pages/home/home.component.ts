import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // objeto temporário
  protected listaCategorias = [
    {
      categoria: 'IA'
    },
    {
      categoria: 'Computação'
    },
    {
      categoria: 'Machine Learning'
    }
  ];

  protected listaArtigos = [{
    caminhoImagem: '',
    categoria: 'IA',
    titulo: 'O futuro da IA',
    texto: 'blablablablablablablablablablab',
  },
  {
    caminhoImagem: '',
    categoria: 'IA',
    titulo: 'O futuro da IA',
    texto: 'blablablablablablablablablablab',
  },
  {
    caminhoImagem: '',
    categoria: 'IA',
    titulo: 'O futuro da IA',
    texto: 'blablablablablablablablablablab',
  },
  {
    caminhoImagem: '',
    categoria: 'IA',
    titulo: 'O futuro da IA',
    texto: 'blablablablablablablablablablab',
  }]

  public constructor() { }
}
