import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../../../../../core/services/cart.service';
import { IProduct } from '../../../../../core/models/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  products: IProduct[] = [];

  itemTotal: number = 0;

  constructor(
    private _basketCartService: CartService
  ) {}

  ngOnInit(): void {
    this._basketCartService.getItemsCart().subscribe({
      next: (val) => {
        this.products = val
        this.itemTotal = this.products.length
      }
    })

  }

  deleteItem(id: number) {
    this._basketCartService.deleteItemBasket(id);
  }
}
