import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CompanyComponent } from './component/company/company.component';
import { HomeComponent } from './component/home/home.component';
import { SymbolsComponent } from './component/symbols/symbols.component';
import { SymbolDetailsComponent } from './component/symbol-details/symbol-details.component';
import { MajorsIndexesComponent } from './component/majors-indexes/majors-indexes.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    SymbolsComponent,
    SymbolDetailsComponent,
    MajorsIndexesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
       { path: '', redirectTo: '/home', pathMatch: 'full' },
       { path: 'home', component: HomeComponent },
       { path: 'symbols', component: SymbolsComponent },
       { path: 'symbol/:id', component: SymbolDetailsComponent },
       { path: 'company', component: CompanyComponent },
       { path: 'major-indexes', component: MajorsIndexesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
