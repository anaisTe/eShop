import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../../../../core/services/productos.service';
import { CartService } from '../../../../../core/services/cart.service';
import { IProduct } from '../../../../../core/models/products.model';
import { SidenavService } from '../../../../../core/services/sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {

  // productsList = this._productService.getProducts();

  ItemsList: IProduct[] = [];

  label = 'Agregar al carrito';

  constructor(
    private route: Router,
    private _productService: ProductosService,
    private _basketCartService: CartService,
    private _sidenavService: SidenavService,
  ) {}


  itemDetail(id: string) {
    this.route.navigate(['inicio/detalle', id])
  }

  btnAdd(item: IProduct) {
    this._basketCartService.addItemToBasket(item);
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next: (val) => {
        this.ItemsList = val;
      }
    })


    this._sidenavService.filterProductsByCategory$.subscribe({
      next: (val) => {
        this.ItemsList = val
      }
    })
  }
}
