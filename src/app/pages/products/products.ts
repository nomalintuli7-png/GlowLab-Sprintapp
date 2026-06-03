import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductService } from '../../service/products';
import { CartService } from '../../service/cart';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {

  selectedCategory = 'all';

  products: any[] = [];
  filtered: any[] = [];
  searchText = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  toastr = inject(ToastrService);

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filtered = this.products;
  }

  // ✅ CATEGORY CLICK FILTER
  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  // ✅ SEARCH FIX
  searchProduct() {
    this.applyFilters();
  }

  // ✅ MAIN FILTER LOGIC (SEARCH + CATEGORY TOGETHER)
  applyFilters() {
    const text = this.searchText.toLowerCase();
  
    this.filtered = this.products.filter(product => {
  
      const matchesText =
        product.name.toLowerCase().includes(text) ||
        product.description.toLowerCase().includes(text);
  
      const matchesCategory =
        this.selectedCategory === 'all' ||
        product.category === this.selectedCategory;
  
      return matchesText && matchesCategory;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.toastr.success('Added to cart');
  }

  // OPTIONAL: add new product
  addProduct(newProduct: any) {
    this.products.push(newProduct);
    this.filtered = this.products;
  }
}