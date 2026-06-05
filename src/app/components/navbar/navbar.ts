import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart';
import { AuthService } from '../../service/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {

  count = 0;
  isLoggedIn = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    
    this.cartService.cartCount$.subscribe(value => {
      

      this.count = value;
    });

    
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    alert('Logged out successfully');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}