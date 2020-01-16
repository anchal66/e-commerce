import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard{

  constructor(private auth: AuthService, private userService: UserService) { }

  // canActivate(){
  //   this.auth.user$.pipe(switchMap((user) => {
  //       return this.userService.get(user.uid);
  //     })
  //   ).subscribe(x => console.log(x));
  // }
}
