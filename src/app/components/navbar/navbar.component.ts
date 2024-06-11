import { Component } from '@angular/core';
import { TokenService } from '../../services/token/token.service';
import { AdminService } from '../../services/admin/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public constructor(public tokenService: TokenService, public adminService: AdminService) { }

  protected fazerLogout(): void {
    try {
      this.tokenService.logout();
    } catch (error) {
      console.error(error);
    }
  }
}
