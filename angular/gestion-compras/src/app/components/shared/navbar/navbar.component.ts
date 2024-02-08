import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() isLoggedIn: boolean = false;
  @Output() logout = new EventEmitter<void>();

  constructor() {}

  onLogout() {
    this.logout.emit();
  }
}
