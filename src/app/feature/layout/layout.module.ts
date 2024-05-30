import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-rounting.module';
import { SharedModule } from '../../shared/shared.module';
import { provideHttpClient, withFetch } from '@angular/common/http';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  providers: [
    provideHttpClient(withFetch()),
  ]
})
export class LayoutModule { }
