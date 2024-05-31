import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../../../../core/services/productos.service';
import { CartService } from '../../../../../core/services/cart.service';
import { IProduct } from '../../../../../core/models/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  productsList = this._productService.getProducts();

  ItemsList: IProduct[] = [];

  constructor(
    private route: Router,
    private _productService: ProductosService,
    private _basketCartService: CartService
  ) {}


  itemDetail(id: string) {
    this.route.navigate(['inicio/detalle', id])
  }

  btnAdd(item: IProduct) {
    this._basketCartService.addItemToBasket(item);
  }
}
