import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import FinancialRatios from '../model/financial-ratios';

@Injectable({
  providedIn: 'root'
})
export default class FinancialRatiosService {

  	public API = 'https://financialmodelingprep.com/api/v3';
  	public ENDPOINT = `${this.API}/financial-ratios/`;

  	constructor(private http: HttpClient) { }
  	  
  	getOne(symbol): Observable<FinancialRatios> 
  	{
    	return this.http.get<FinancialRatios>(this.ENDPOINT + symbol);
  	} 
  	
  	
}
