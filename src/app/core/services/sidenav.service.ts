import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IMenuItem } from '../models/sideNav.model';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav!: MatSidenav;
  
  constructor(
    private httpClient: HttpClient
  ) {}

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  closeSidenav():void {
    this.sidenav.close();
  }

  toggle(): void {
    this.sidenav.toggle();
  }

  getItemSidenav(): Observable<IMenuItem[]> {
    return this.httpClient.get<IMenuItem[]>(environment.baseAPIURL + '/sideNavMenu')
  }
}
