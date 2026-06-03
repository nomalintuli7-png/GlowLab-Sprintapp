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
  private users: any[] = [];

  constructor(private router: Router) {}

  register() {
    if (!this.user.username || !this.user.email || !this.user.password) {
      alert("Please fill all fields");
      return;
    }
    const localUser = localStorage.getItem('user')

    if(localUser) {
      this.users = JSON.parse(localUser)
    } 
    
    this.users.push(this.user);
    
    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(this.users));

    alert("Registration successful!");


    // reset form
    this.user = {
      username: '',
      email: '',
      password: ''
    };

    // navigate AFTER success
    this.router.navigate(['/login']);
  }
}