import {Injectable, signal} from '@angular/core';
import {Product} from "../models/products.models";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // define signal to define our state
  cart = signal<Product[]>([]);

  // add a product to cart
  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  constructor() { }
}







