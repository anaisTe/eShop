import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartComponent } from '../../../feature/layout/home/pages/cart/cart.component';
import { SidenavService } from '../../../core/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private _sidenavService: SidenavService
  ) {}

  itemsList() {
    // this.router.navigateByUrl('inicio/canasta')
    this.dialog.open(CartComponent)
  }

  openSideNav() {
    this._sidenavService.toggle()
  }
}
