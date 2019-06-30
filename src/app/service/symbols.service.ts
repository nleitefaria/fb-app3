import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Symbols from '../model/symbols';

@Injectable({
  providedIn: 'root'
})
export default class SymbolsService {

    public API = 'https://financialmodelingprep.com/api/v3';
  	public ENDPOINT = `${this.API}/company/stock/list`;

  	constructor(private http: HttpClient) { }
  	  
  	getAll(): Observable<Symbols> 
  	{
    	return this.http.get<Symbols>(this.ENDPOINT);
  	} 
}
