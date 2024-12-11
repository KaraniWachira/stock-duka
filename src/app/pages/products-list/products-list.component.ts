import {Component, signal} from '@angular/core';
import {Product} from "../../models/products.models";
import {ProductCardComponent} from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Backpack',
      price: 18.95,
      image: '',
      stock: 9
    },
    {
      id: 1,
      title: 'Backpack',
      price: 18.95,
      image: '',
      stock: 0
    },
    {
      id: 1,
      title: 'Backpack',
      price: 18.95,
      image: '',
      stock: 0
    },
    {
      id: 1,
      title: 'Backpack',
      price: 18.95,
      image: '',
      stock: 0
    }
  ])
}





