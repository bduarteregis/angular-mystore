import { Injectable } from '@angular/core';

import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  static addToCart(product: any) {
    throw new Error('Method not implemented.');
  }
  items = [];

  @Input() product;

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
    window.alert('Seu produto foi adicionado ao carrinho!');
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}