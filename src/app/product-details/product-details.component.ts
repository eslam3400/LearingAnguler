import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private cart: CartService) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = products.find((product) => product.id == productId);
  }

  addToCart(product: Product) {
    this.cart.addToCart(product);
    alert('product added to the cart');
  }
}
