import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements AuthGuard {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    // this.auth.user$.subscribe(user => {
    //   if (user) { return true; }

    //   this.router.navigate(['/login']);
    //   return false;
    // We return  bollean by tranforming this obervable to boolean and angular will internally unsbicse later
    return this.auth.user$.pipe(map(user => {
      if (user) { return true; }

      this.router.navigate(['/login']);
      return false;
    }));
  }
}
