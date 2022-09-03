import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';

@Injectable()
export class CredentialInterceptor implements HttpInterceptor {
login = true;
  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      withCredentials: true
    });

    return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status === 403) {
        this.login = false;      
      }
      return throwError(() => err);
    }));
  }
}
