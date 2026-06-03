import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  loginForm: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }
  

  login() {

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    const success = this.authService.login(email, password);

    if (success) {

      alert("Login successful!");

      // redirect logic after login
      const redirect = localStorage.getItem('redirectAfterLogin');

      if (redirect === 'checkout') {
        localStorage.removeItem('redirectAfterLogin');
        this.router.navigate(['/cart']);
      } else {
        this.router.navigate(['/products']);
      }

    } else {
      alert("Invalid email or password");
    }
  }
}