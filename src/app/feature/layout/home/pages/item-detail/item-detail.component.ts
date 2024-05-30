import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../../../../core/services/productos.service';
import { IProduct } from '../../../../../core/models/products.model';
import { Observable, finalize } from 'rxjs';

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
    private activatedRoute: ActivatedRoute
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



  backPage() {
    this.route.navigateByUrl("/")
  }
}
