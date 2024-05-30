import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrl: './artigos.component.scss',
})
export class ArtigosComponent {
  constructor(private location: Location) {}

  protected retornarPagina(): void {
    this.location.back();
  }
}
