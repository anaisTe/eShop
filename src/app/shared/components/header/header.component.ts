import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartComponent } from '../../../feature/layout/home/pages/cart/cart.component';
import { SidenavService } from '../../../core/services/sidenav.service';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  badgetLabel: number = 0;

  constructor(
    public dialog: MatDialog,
    private _sidenavService: SidenavService,
    private _basketCartService: CartService
  ) {}

  itemsList() {
    this.dialog.open(CartComponent, { disableClose: true })
  }

  openSideNav() {
    this._sidenavService.toggle()
  }

  ngOnInit(): void {
    this._basketCartService.basketForBaget$.subscribe({
      next: val => {
        this.badgetLabel = val.length;
      }
    })
  }
}
