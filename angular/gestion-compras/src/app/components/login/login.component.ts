import { Component, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() loginSuccess = new EventEmitter<void>();

  usuario: string = 'luciana24';
  contrasena: string = '123456';

  username: string = '';
  password: string = '';

  onLogin() {

    if (this.username === this.usuario && this.password === this.contrasena) {

      Swal.fire({
        title: "Inicio de sesión exitoso!",
        text: "Bienvenido",
        icon: "success",
        timer: 1000,
        showConfirmButton: false
      }).then(() => {
        this.loginSuccess.emit();
      });

    } else {

      Swal.fire({
        title: "¡Inicio de sesión fallido!",
        text: "Verifica tus credenciales",
        icon: "error"
      }).then(() => {
        this.username = '';
        this.password = '';
      });
    }
  }
}
