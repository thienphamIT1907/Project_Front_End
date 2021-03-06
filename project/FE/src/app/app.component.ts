import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { JwtService } from './login/services/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'FE';

  subscription: Subscription;
  roles: string[] = [];
  authority: string;

  isClear = false;

  constructor(private jwtService: JwtService) { }

  ngOnInit(): void {

    // Handling authority granted
    if (this.jwtService.getToken()) {
      this. isClear = true;
      this.roles = this.jwtService.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_MEMBER') {
          this.authority = 'member';
          return false;
        }
        this.authority = 'unauthorized';
        return true;
      });
    }
  }

  scroll(id: string): void {
    const elmnt = document.getElementById(id);
    elmnt.scrollIntoView();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
