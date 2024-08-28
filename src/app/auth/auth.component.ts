import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  codigo: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.codigo === 'sm75014523' && this.password === '21082002') {
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
