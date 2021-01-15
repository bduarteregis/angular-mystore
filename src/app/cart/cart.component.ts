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
  itemCtrl: FormControl;
  cartInputComponent: CartInputComponent;
  checkoutForm;
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { 
    this.inicializa();
   }

  ngOnInit() { 
  //   this.items = this.cartService.getItems();
  //   this.checkoutForm.valueChanges.subscribe((valor) => {
  //     this.checkoutForm.formGroupValue = JSON.stringify(valor);
  //     console.log(this.checkoutForm);
  //   })
  }

  inicializa() {

    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],

    });
  }

  onSubmit(customerData) {

    if(this.checkoutForm.valid) {
      this.items = this.cartService.clearCart();
      this.inicializa();

      console.warn('Compra finalizada com sucesso!', customerData);
      window.alert('Parabéns, sua compra foi finalizada com sucesso!');

    } else {
      window.alert('--- CAMPO OBRIGATÓRIO!');
    }
  }

//   implements ControlValueAccessor
// registerOnChange(fn) {
// registerOnTouched() {}
// writeValue(value) {
//   propagateChange
// registerOnChange(fn) {
//         this.propagateChange = fn;
//     }
//     this.itemCtrl.valueChanges
}