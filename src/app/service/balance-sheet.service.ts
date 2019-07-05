import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import BalanceSheet from '../model/balance-sheet';

@Injectable({
  providedIn: 'root'
})
export default class BalanceSheetService {

  	public API = 'https://financialmodelingprep.com/api/v3';
  	public ENDPOINT = `${this.API}/financials/income-statement/`;

  	constructor(private http: HttpClient) { }
  	  
  	getOne(symbol): Observable<BalanceSheet> 
  	{
    	return this.http.get<BalanceSheet>(this.ENDPOINT + symbol);
  	}  
}
