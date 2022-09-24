import { ComfirmationComponent } from './components/comfirmation/comfirmation.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'',component:ProductListComponent},
{path: 'my-product-details/:id', component:ProductItemDetailsComponent },
{path: 'my-cart', component: CartComponent},
{ path: 'comfirmation', component: ComfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
