import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent {
  protected formularioCarregando: boolean = false;

  public constructor(private location: Location) {}

  protected retornarPagina(): void { this.location.back(); }
}
