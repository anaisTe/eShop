import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../../../../core/services/productos.service';
import { IProduct } from '../../../../../core/models/products.model';
import { Observable, finalize } from 'rxjs';
import { CartService } from '../../../../../core/services/cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent implements OnInit {
  
  loading = false;
  product$!: Observable<IProduct | any>;
  productId!: string;

  constructor(
    private route: Router,
    private _productService: ProductosService,
    private activatedRoute: ActivatedRoute,
    private _basketCartService: CartService
  ) { }


  ngOnInit(): void {
    this.loading = true;

    this.productId = this.activatedRoute.snapshot.params['id'];

    this.product$ = this._productService.getProductById(this.productId)
    .pipe(
      finalize(() => {
          this.loading = false;
      })
    );
  }

  btnAdd(item: IProduct) {
    this._basketCartService.addItemToBasket(item);
  }


  backPage() {
    this.route.navigateByUrl("/")
  }
}
