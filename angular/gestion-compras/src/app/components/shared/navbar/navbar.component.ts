import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() isLoggedIn: boolean = false;
  @Output() logout = new EventEmitter<void>();

  constructor(private router: Router) {}

  onLogout() {
    this.logout.emit();
  }
}
