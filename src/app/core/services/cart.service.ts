import { Injectable } from '@angular/core';
import { IProduct } from '../models/products.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  basketItem: IProduct[] = [];
  _basketItemSub: BehaviorSubject<IProduct[]>;

  constructor() { 
    this._basketItemSub = new BehaviorSubject<IProduct[]>([])
  }

  addItemToBasket(item: IProduct) {
    this.basketItem.push(item);
    this._basketItemSub.next(this.basketItem);
  }

  getItemsCart(): Observable<IProduct[]> {
    return this._basketItemSub.asObservable();
  }

  deleteItemBasket(itemId: string) {
    this.basketItem = this.basketItem.filter( product => product.id !== itemId);
    this._basketItemSub.next(this.basketItem)
  }
}
