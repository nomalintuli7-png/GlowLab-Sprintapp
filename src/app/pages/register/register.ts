import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  user = {
    username: '',
    email: '',
    password: ''
  };

  users: any[] = [];

  constructor(private router: Router) {}

  register() {

    console.log("REGISTER FUNCTION IS RUNNING");

    // 1. Empty check
    if (!this.user.username || !this.user.email || !this.user.password) {
      alert("Please fill all fields");
      return;
    }

    // 2. Username validation
    if (this.user.username.trim().length < 3) {
      alert("Username must be at least 3 characters");
      return;
    }

    // 3. Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(this.user.email)) {
      alert("Please enter a valid email");
      return;
    }

    // 4. Password validation
    if (this.user.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // 5. Load existing users safely
    const localUser = localStorage.getItem('user');

    if (localUser) {
      this.users = JSON.parse(localUser || '[]');
    }

    // 6. Save new user (IMPORTANT: clone object)
    this.users.push({ ...this.user });

    localStorage.setItem('user', JSON.stringify(this.users));

    alert("Registration successful!");

    // 7. Reset form
    this.user = {
      username: '',
      email: '',
      password: ''
    };

    // 8. Navigate to login
    this.router.navigate(['/login']);
  }
}