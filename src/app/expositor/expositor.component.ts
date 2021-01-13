import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { products } from '../products';
import { trigger, query, style, animate, transition, stagger } from '@angular/animations';

@Component({
  selector: 'app-expositor',
  templateUrl: './expositor.component.html',
  styleUrls: ['./expositor.component.css'],
  animations: [
    trigger(
      'scaleAnimation', [
        transition(':enter', [
          style({transform: 'scale(0)', opacity: 0}),
          animate('1500ms', style({transform: 'scale(1)', opacity: 1}))
        ])  
      ]
    )]
})
export class ExpositorComponent implements OnInit {
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
  }

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
