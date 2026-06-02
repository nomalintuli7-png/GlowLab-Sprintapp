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

  searchProduct() {
    this.filtered = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    // alert('Added To Cart');
    this.toastr.success('added to cart');

  }

  // OPTIONAL: add new product (if you need later)
  addProduct(newProduct: any) {
    this.products.push(newProduct);
    this.filtered = this.products;
  }
}