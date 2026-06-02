import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  loginForm: any;

  constructor(private fb: FormBuilder, private router: Router) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  login() {

    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    const formValue = this.loginForm.value;

    if (
      formValue.email === storedUser.email &&
      formValue.password === storedUser.password
    ) {
      alert("Login successful!");

      // ✅ SAVE LOGIN STATE
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(storedUser));

    this.router.navigate(['/products']);

  } else {
    alert("Invalid email or password");
  }



const redirect = localStorage.getItem('redirectAfterLogin');

if (redirect === 'checkout') {
  localStorage.removeItem('redirectAfterLogin');
  this.router.navigate(['/cart']);
} else {
  this.router.navigate(['/products']);
}}}
