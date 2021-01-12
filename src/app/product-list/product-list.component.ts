import { Component } from '@angular/core';
import { CartService } from '../cart.service';

import { products } from '../products';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger(
      'scaleAnimation', [
        transition(':enter', [
          style({transform: 'scale(0)', opacity: 0}),
          animate('1500ms', style({transform: 'scale(1)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'scale(1)', opacity: 1}),
          animate('500ms', style({transform: 'scale(0)', opacity: 0}))
        ])
      ]
    )]
})
export class ProductListComponent {
  products = products;
  product;

  share() {
    window.alert('O produto foi compartilhado!');
  }

  onNotify() {
    window.alert('Você será notificado quando o produto estiver à venda!');
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Seu produto foi adicionado ao carrinho!');
  }

  constructor(
    private cartService: CartService
  ) { }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/