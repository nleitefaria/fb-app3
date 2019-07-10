import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Gainers from '../model/gainers';


@Injectable({
  providedIn: 'root'
})
export default class GainersService {

  	public API = 'https://financialmodelingprep.com/api/v3';
  	public ENDPOINT = `${this.API}/stock/gainers`;

  	constructor(private http: HttpClient) { }
  	  
  	getAll(): Observable<Gainers> 
  	{
    	return this.http.get<Gainers>(this.ENDPOINT);
  	} 
}
