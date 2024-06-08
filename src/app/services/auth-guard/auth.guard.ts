import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class AuthGuard {

  constructor(private router: Router, private tokenService: TokenService, private adminService: AdminService) {}

  public canActivate(): boolean | Promise<boolean> {
    console.log("1=", this.adminService.retornoAdmin())

    if (this.adminService.retornoAdmin()) {
      console.log("2=",this.adminService.retornoAdmin())
      return true;
    }
    console.log("negou acesso")
    return this.tokenService.logout();
  }
}
