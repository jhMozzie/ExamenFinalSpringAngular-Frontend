import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe({
        next: (response) => {
          console.log('Login exitoso:', response);
          alert('Login exitoso');
          this.router.navigate(['/home']); // Redirige a la página principal
        },
        error: (error) => {
          console.error('Error en el login:', error);
          alert('Usuario o contraseña incorrectos');
        },
      });
    } else {
      alert('Completa todos los campos');
    }
  }
}