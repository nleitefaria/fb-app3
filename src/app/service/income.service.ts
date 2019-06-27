import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import IncomeStatement from '../model/income-statement';

@Injectable({
  providedIn: 'root'
})
export default class IncomeService {

    public API = 'https://financialmodelingprep.com/api/v3';
  	public ENDPOINT = `${this.API}/financials/income-statement/`;

  	constructor(private http: HttpClient) { }
  	  
  	getOne(symbol): Observable<IncomeStatement> 
  	{
    	return this.http.get<IncomeStatement>(this.ENDPOINT + symbol);
  	}  
}
