import { MycartService } from './services/mycart.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { ComfirmationComponent } from './components/comfirmation/comfirmation.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemDetailsComponent,
    ComfirmationComponent,
    CartComponent,
    FormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
     
  ],
  providers: [ MycartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
