import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import MostActives from '../model/most-actives';

@Injectable({
  providedIn: 'root'
})
export default class MostActiveService {

  	public API = 'https://financialmodelingprep.com/api/v3';
  	public ENDPOINT = `${this.API}/stock/actives`;

  	constructor(private http: HttpClient) { }
  	  
  	getAll(): Observable<MostActives> 
  	{
    	return this.http.get<MostActives>(this.ENDPOINT);
  	} 
}
