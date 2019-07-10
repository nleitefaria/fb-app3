import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Losers from '../model/losers';

@Injectable({
  providedIn: 'root'
})
export default class LosersService {

	public API = 'https://financialmodelingprep.com/api/v3';
  	public ENDPOINT = `${this.API}/stock/losers`;

  	constructor(private http: HttpClient) { }
  	  
  	getAll(): Observable<Losers> 
  	{
    	return this.http.get<Losers>(this.ENDPOINT);
  	} 
}
