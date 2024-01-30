import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'gestion-compras';
  isLoggedIn: boolean = true;

  constructor(private ruta: ActivatedRoute, private router: Router) { }

  onLoginSuccess() {
    this.isLoggedIn = true;
    this.router.navigate(['/']);
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
