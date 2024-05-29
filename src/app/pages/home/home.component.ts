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

  public constructor() { }
}
