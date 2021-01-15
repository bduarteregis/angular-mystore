import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { CartService } from '../cart.service';
import { CartComponent } from './cart.component';

@Component({
  selector: 'app-cart-input',
  templateUrl: './cart-input.component.html',
})

export class CartInputComponent {
    @Input() label;
    @Input() placeholder;
    itemCtrl: FormControl;
    items;
    checkoutForm;
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
      this.itemCtrl = new FormControl();
      this.itemCtrl.setValidators(Validators.required);
  }

  ngOnInit() {  }

}