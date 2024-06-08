import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private usuarioAdmin: boolean = false;

  constructor(private http: HttpClient) { }

  public alterarStatusAdmin(admin: boolean): void {
    console.log("mudou",admin);
    this.usuarioAdmin = admin;
  }

  public retornoAdmin(): boolean {
    console.log(this.usuarioAdmin);
    return this.usuarioAdmin;
  }
}
