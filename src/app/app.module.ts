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
import { MostActiveComponent } from './component/most-active/most-active.component';
import { GainersComponent } from './component/gainers/gainers.component';
import { LosersComponent } from './component/losers/losers.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    SymbolsComponent,
    SymbolDetailsComponent,
    MajorsIndexesComponent,
    MostActiveComponent,
    GainersComponent,
    LosersComponent
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
       { path: 'major-indexes', component: MajorsIndexesComponent },
       { path: 'most-active', component: MostActiveComponent },
       { path: 'gainers', component: GainersComponent },
       { path: 'losers', component: LosersComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
