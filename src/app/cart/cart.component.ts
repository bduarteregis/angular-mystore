import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { CartService } from '../cart.service';
import { CartInputComponent } from './cart-input.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent {
  items;
  @Input() checkoutForm;
  cartInputComponent: CartInputComponent;
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {  }

  ngOnInit() {  }

  onSubmit(customerData) {

  }

}