import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, from, switchMap, throwError } from 'rxjs';
import { TokenService } from '../token/token.service';
import { UserServiceService } from '../user/user-service.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("ROTA INTERCEPTOR")
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.get()}`);
    request = request.clone({ headers });

    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && !request.url.includes('login') && error.status === 401 || error.status === 403) {

          this.tokenService.logout();
          this.router.navigate(['/login']);
        }

        return throwError(() => error);
      })
    );
  }

}
