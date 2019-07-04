import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'IB Blog';

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
  }

  ngOnInit() {
  }

  login() {
    if (this.isLoggedIn()) {
      this.authService.disconnect();
      this.router.navigate(['home']);
    } else {
      let username = prompt('Veuillez saisir votre identifiant', undefined);
      if (username) {
        this.authService.register(username);
      }
    }
  }

  isLoggedIn() {
    return this.authService.check();
  }

  getUser(): string {
    return this.authService.getUser();
  }

}
