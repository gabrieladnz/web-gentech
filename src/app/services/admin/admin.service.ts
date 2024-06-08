import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private usuarioAdmin: boolean = false;

  constructor() {
    const salvarEstadoAdmin = localStorage.getItem('usuarioAdmin');
    if (salvarEstadoAdmin !== null) {
      this.usuarioAdmin = JSON.parse(salvarEstadoAdmin);
    }
  }

  public retornoAdmin(): boolean {
    return this.usuarioAdmin;
  }

  public alterarStatusAdmin(isAdmin: boolean): void {
    this.usuarioAdmin = isAdmin;
    localStorage.setItem('usuarioAdmin', JSON.stringify(this.usuarioAdmin));
  }
}
