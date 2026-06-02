import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-new-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-products.html',
  styleUrls: ['./new-products.css']
})
export class NewProductsComponent implements OnInit {

  constructor(private cartService: CartService) {}

  searchText = '';
  filtered: any[] = [];

  products = [
    {
      id: 1,
      name: 'Lips',
      description: 'Violet Color 101 lipstick',
      price: 320,
      image: 'https://t3.ftcdn.net/jpg/19/03/10/00/240_F_1903100098_QkZo906RJsUZ2xvXybNYnMqGT0zT0acf.jpg'
    },

    {
      id: 2,
      name: 'Lipstick',
      description: 'Red Color 202 lipstick',
      price: 220,
      image: 'https://t4.ftcdn.net/jpg/15/44/19/51/240_F_1544195182_e8XghoSpVwBDrnX1jwwwmrpGDzdiBvfZ.jpg'
    },

  ];

  ngOnInit(): void {
    this.filtered = this.products;
  }

  searchProduct() {

    if (!this.searchText.trim()) {
      this.filtered = this.products;
      return;
    }

    this.filtered = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );

  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Added To Cart');
  }

}