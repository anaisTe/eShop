import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//API reference Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



//Components and others
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavItemsComponent } from './components/sidenav-items/sidenav-items.component';
import { CountComponent } from './components/count/count.component';

const MATERIAL = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatBadgeModule,
  MatDialogModule,
  MatSidenavModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidenavItemsComponent, 
    CountComponent
  ],
  imports: [
    ...MATERIAL, 
    CommonModule
  ],
  exports: [
    ...MATERIAL, 
    HeaderComponent, 
    FooterComponent,
    SidenavItemsComponent,
    CountComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
