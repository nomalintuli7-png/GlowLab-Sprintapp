import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: any[] = [];

  constructor() {
    const savedUsers = localStorage.getItem('user');
  
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
  
    }
  }

  register(user: any) {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  login(email: string, password: string): boolean {

    const savedUsers = localStorage.getItem('user');
  
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  
    const user = this.users.find(
      (u: any) =>
        u.email === email &&
        u.password === password
    );
  
    if (user) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
  
    return false;
  }
  logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
}
