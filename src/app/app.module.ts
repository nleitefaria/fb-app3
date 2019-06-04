import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot([
       { path: '', redirectTo: '/', pathMatch: 'full' },
       { path: 'customers', component: CustomerComponent }
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
