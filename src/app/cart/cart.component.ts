import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cart.getItems();
  checkOutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(private cart: CartService, private formBuilder: FormBuilder) {}
  submit(): void {
    this.items = this.cart.clearCart();
    alert(
      'your order submited' +
        this.checkOutForm.value.name +
        this.checkOutForm.value.address
    );
    this.checkOutForm.reset();
  }
}
