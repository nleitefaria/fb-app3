import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import CompanyProfile from '../model/company-profile';

@Injectable({
  providedIn: 'root'
})
export default class CompanyProfileService 
{
	public API = 'https://financialmodelingprep.com/api/v3';
  	public ENDPOINT = `${this.API}/company/profile/`;

  	constructor(private http: HttpClient) { }
  	  
  	getOne(symbol): Observable<CompanyProfile> 
  	{
    	return this.http.get<CompanyProfile>(this.ENDPOINT + symbol);
  	}  
}