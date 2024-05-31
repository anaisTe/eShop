import { Injectable } from '@angular/core';
import { IProduct } from '../models/products.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  basketItem: IProduct[] = [];
  _basketItemSub: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  basketForBaget$ = this._basketItemSub.asObservable();

  constructor() { }

  addItemToBasket(item: IProduct) {
    this.basketItem.push(item);
    this._basketItemSub.next(this.basketItem);
  }

  getItemsCart(): Observable<IProduct[]> {
    return this._basketItemSub.asObservable();
  }

  // deleteItemBasket(itemId: string) {
  //   this.basketItem = this.basketItem.filter( product => product.id !== itemId);
  //   this._basketItemSub.next(this.basketItem)
  // }
  deleteItemBasket(itemIndex: number) {
    this.basketItem.splice(itemIndex, 1);
    this._basketItemSub.next(this.basketItem)
  }

  itemsLength() {
    return this.basketItem.length;
  }
}
