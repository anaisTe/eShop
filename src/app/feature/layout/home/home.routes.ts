import { Routes } from '@angular/router';
import { ItemComponent } from './pages/item/item.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { CartComponent } from './pages/cart/cart.component';

export const HomeRoutes: Routes = [
    {
        path: '', component: ItemComponent
    },
    {
        path: 'detalle/:id', component: ItemDetailComponent
    },
    {
        path: 'canasta', component: CartComponent
    }
];