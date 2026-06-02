import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CartService } from '../../service/cart';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {

  count = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe(value => {
      this.count = value;
    });


  }
}
