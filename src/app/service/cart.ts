import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];

  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  addToCart(product: any) {

    const existingProduct = this.cartItems.find(
      item => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartItems.push({
        ...product,
        quantity: 1
      });
    }

    this.updateCart();
  }

  clearCart() {
    this.cartItems = [];
    this.updateCart();
  }

  getCartItems() {
    return this.cartItems;
  }

  removeItem(index: number) {

    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    } else {
      this.cartItems.splice(index, 1);
    }

    this.updateCart();
  }

  //  NEW: increase quantity
  increaseQty(index: number) {
    this.cartItems[index].quantity++;
    this.updateCart();
  }

  //  NEW: decrease quantity
  decreaseQty(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    } else {
      this.cartItems.splice(index, 1);
    }
    this.updateCart();
  }

  getCartCount() {
    return this.cartItems.reduce(
      (count, item) => count + item.quantity,
      0
    );
  }

  getTotal() {
    return this.cartItems.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    );
  }

  private updateCart() {
    this.cartItemsSubject.next([...this.cartItems]);
    this.cartCount.next(this.getCartCount());
  }

}