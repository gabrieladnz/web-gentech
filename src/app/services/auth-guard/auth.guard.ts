import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class AuthGuard {

  constructor(private router: Router, private tokenService: TokenService, private adminService: AdminService) { }

  public canActivate(): boolean | Promise<boolean> {

    if (this.tokenService.get() && this.adminService.retornoAdmin()) {
      return true;
    }

    return this.router.navigate(['/login']);
  }
}
