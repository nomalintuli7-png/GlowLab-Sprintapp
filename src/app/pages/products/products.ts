import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  filtered: any[] = [];
  searchText = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // ✅ load products from service
    this.products = this.productService.getProducts();
    this.filtered = this.products;
  }

  // 🔍 search products
  searchProduct() {
    this.filtered = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // 🔄 reset search (optional but useful)
  resetSearch() {
    this.searchText = '';
    this.filtered = this.products;
  }

  // 🛒 add to cart (placeholder, implement as needed)
  addToCart(product: any) {
    console.log('Adding to cart:', product);}
}