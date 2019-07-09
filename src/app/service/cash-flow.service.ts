import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import CashFlows from '../model/cash-flows';

@Injectable({
  providedIn: 'root'
})
export default class CashFlowService {

    public API = 'https://financialmodelingprep.com/api/v3';
  	public ENDPOINT = `${this.API}/financials/cash-flow-statement/`;
  	
  	constructor(private http: HttpClient) { }
  	  
  	getOne(symbol): Observable<CashFlows> 
  	{
    	return this.http.get<CashFlows>(this.ENDPOINT + symbol);
  	}   	
}
