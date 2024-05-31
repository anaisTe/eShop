import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../../core/services/sidenav.service';
import { ProductosService } from '../../../core/services/productos.service';
import { IProduct } from '../../../core/models/products.model';

@Component({
  selector: 'app-sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrl: './sidenav-items.component.scss'
})
export class SidenavItemsComponent implements OnInit {

  productsByCategory: IProduct[] = [];

  constructor(
    private _sidenavService: SidenavService,
    private _productService: ProductosService
  ){}

  ItemSidenav = this._sidenavService.getItemSidenav();

  ngOnInit(): void {

    // this.listByCategory('cocina');
  }
  
  listByCategory(category: string) {
    this._productService.getProducts().subscribe({
      next: (val) => {
        const itemCategory = val.filter( list => list.category.toLocaleLowerCase() === category.toLocaleLowerCase());
        this.productsByCategory = itemCategory;
        this._sidenavService.updatePageProducts(this.productsByCategory)
      }
    })
    
  }

}
