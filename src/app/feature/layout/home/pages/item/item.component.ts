import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../../../../core/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  constructor(
    private route: Router,
    private _productService: ProductosService
  ) {}

  ItemProducts = this._productService.getProducts();


  itemDetail(id: string) {
    console.log('opened', id);
    this.route.navigate(['inicio/detalle', id])
  }

  btnAdd() {
    console.log('add');
    
  }
}
