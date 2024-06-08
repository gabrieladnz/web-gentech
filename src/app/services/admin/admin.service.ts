import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private usuarioAdmin: boolean = false;

  constructor(private http: HttpClient) { }

  public alterarStatusAdmin(admin: boolean): void {
    console.log(admin);
    this.usuarioAdmin = admin;
  }

  public retornoAdmin(): boolean {
    return this.usuarioAdmin;
  }
}
