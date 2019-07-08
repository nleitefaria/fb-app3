import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import BalanceSheets from '../model/balance-sheets';

@Injectable({
  providedIn: 'root'
})
export default class BalanceSheetService {

  	public API = 'https://financialmodelingprep.com/api/v3';
  	public ENDPOINT = `${this.API}/financials/balance-sheet-statement/`;

  	constructor(private http: HttpClient) { }
  	  
  	getOne(symbol): Observable<BalanceSheets> 
  	{
    	return this.http.get<BalanceSheets>(this.ENDPOINT + symbol);
  	}  
}
