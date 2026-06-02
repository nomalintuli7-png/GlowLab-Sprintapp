cart.ts


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '..';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  total = 0;

  constructor(private cartService: CartService,
  private router: Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  remove(index: number) {
    this.cartService.removeItem(index);
    this.loadCart();
  }

  increaseQty(index: number) {
    this.cartService.increaseQty(index);
    this.loadCart();
  }

  decreaseQty(index: number) {
    this.cartService.decreaseQty(index);
    this.loadCart();
  }
  checkout() {

    const isLoggedIn = localStorage.getItem('loggedIn');

    if (!isLoggedIn) {
      alert('Please login first before checkout');

      // store where user was going
      localStorage.setItem('redirectAfterLogin', 'checkout');

      this.router.navigate(['/login']);
      return;
    }

    alert('Checkout successful!');

    this.cartService.clearCart();
    this.cartItems = [];
    this.total = 0;

    // optional: stay on same page OR show message
  }
}